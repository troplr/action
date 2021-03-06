import {GraphQLNonNull} from 'graphql'
import getRethink from 'server/database/rethinkDriver'
import createNewOrg from 'server/graphql/mutations/helpers/createNewOrg'
import createTeamAndLeader from 'server/graphql/mutations/helpers/createTeamAndLeader'
import CreateFirstTeamPayload from 'server/graphql/types/CreateFirstTeamPayload'
import NewTeamInput from 'server/graphql/types/NewTeamInput'
import {getUserId, isAuthenticated} from 'server/utils/authorization'
import sendSegmentEvent from 'server/utils/sendSegmentEvent'
import tmsSignToken from 'server/utils/tmsSignToken'
import shortid from 'shortid'
import resolvePromiseObj from 'universal/utils/resolvePromiseObj'
import addSeedTasks from './helpers/addSeedTasks'
import createFirstTeamValidation from './helpers/createFirstTeamValidation'
import {sendNotAuthenticatedAccessError} from 'server/utils/authorizationErrors'
import sendAuthRaven from 'server/utils/sendAuthRaven'
import sendFailedInputValidation from 'server/utils/sendFailedInputValidation'

export default {
  type: CreateFirstTeamPayload,
  description: 'Create a new team and add the first team member. Called from the welcome wizard',
  args: {
    newTeam: {
      type: new GraphQLNonNull(NewTeamInput),
      description: 'The new team object with exactly 1 team member'
    }
  },
  async resolve (source, {newTeam}, {authToken}) {
    const r = getRethink()

    // AUTH
    if (!isAuthenticated(authToken)) return sendNotAuthenticatedAccessError()
    const viewerId = getUserId(authToken)

    // VALIDATION
    const user = await r
      .table('User')
      .get(viewerId)
      .merge((user) => ({
        organizationUserCount: r
          .table('OrganizationUser')
          .getAll(user('id'), {index: 'userId'})
          .count()
          .default(0)
      }))

    if (user.organizationUserCount > 0) {
      const breadcrumb = {
        message: 'Cannot use createFirstTeam when already part of an org',
        category: 'Unauthorized access'
      }
      return sendAuthRaven(authToken, 'Oops', breadcrumb)
    }

    const schema = createFirstTeamValidation()
    const {
      data: {name},
      errors
    } = schema(newTeam)
    if (Object.keys(errors).length) {
      return sendFailedInputValidation(authToken, errors)
    }

    // RESOLUTION
    const orgId = shortid.generate()
    const teamId = shortid.generate()
    const validNewTeam = {id: teamId, orgId, name}
    const orgName = `${user.preferredName}’s Org`
    await createNewOrg(orgId, orgName, viewerId)
    const {
      newTeamUpdatedUser: {team, teamLead, tms}
    } = await resolvePromiseObj({
      newTeamUpdatedUser: createTeamAndLeader(viewerId, validNewTeam),
      seedTeam: addSeedTasks(viewerId, teamId)
    })
    sendSegmentEvent('Welcome Step2 Completed', viewerId, {teamId})

    return {
      team,
      teamLead,
      jwt: tmsSignToken(authToken, tms),
      userId: viewerId
    }
  }
}

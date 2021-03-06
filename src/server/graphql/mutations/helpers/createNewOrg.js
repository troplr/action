import getRethink from 'server/database/rethinkDriver'
import {BILLING_LEADER, PERSONAL} from 'universal/utils/constants'
import shortid from 'shortid'
import {NEW_USER_GRACE_PERIOD} from 'server/utils/serverConstants'

export default async function createNewOrg (orgId, orgName, leaderUserId) {
  const r = getRethink()
  const now = new Date()
  return r({
    org: r.table('Organization').insert({
      id: orgId,
      creditCard: {},
      createdAt: now,
      name: orgName,
      tier: PERSONAL,
      updatedAt: now
    }),
    organizationUser: r.table('OrganizationUser').insert({
      id: shortid.generate(),
      inactive: false,
      joinedAt: now,
      newUserUntil: new Date(Date.now() + NEW_USER_GRACE_PERIOD),
      orgId,
      removedAt: null,
      role: BILLING_LEADER,
      userId: leaderUserId
    })
  })
}

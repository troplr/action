import {GraphQLID, GraphQLNonNull, GraphQLObjectType} from 'graphql'
import GraphQLEmailType from 'server/graphql/types/GraphQLEmailType'
import GraphQLISO8601Type from 'server/graphql/types/GraphQLISO8601Type'
import {resolveTeam} from 'server/graphql/resolvers'
import Team from 'server/graphql/types/Team'

const TeamInvitation = new GraphQLObjectType({
  name: 'TeamInvitation',
  description: 'An invitation to become a team member',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The unique invitation Id'
    },
    acceptedAt: {
      type: GraphQLISO8601Type,
      description: 'null if not accepted, else the datetime the invitation was accepted'
    },
    acceptedBy: {
      type: GraphQLID,
      description: 'null if not accepted, else the userId that accepted the invitation'
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: 'The datetime the invitation was created'
    },
    email: {
      type: new GraphQLNonNull(GraphQLEmailType),
      description: 'The email of the invitee'
    },
    invitedBy: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The userId of the person that sent the invitation'
    },
    team: {
      type: new GraphQLNonNull(Team),
      resolve: resolveTeam
    },
    teamId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The team invited to'
    },
    token: {
      type: new GraphQLNonNull(GraphQLID),
      description: '48-byte base64 encoded random string'
      // access to the notification implies access to the token
    }
  })
})

export default TeamInvitation
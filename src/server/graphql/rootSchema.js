import {GraphQLSchema} from 'graphql'
import NotifyPromoteToOrgLeader from 'server/graphql/types/NotifyPromoteToOrgLeader'
import NotificationTeamInvitation from 'server/graphql/types/NotificationTeamInvitation'
import mutation from './rootMutation'
import query from './rootQuery'
import subscription from './rootSubscription'
import RetroPhaseItem from 'server/graphql/types/RetroPhaseItem'
import RetrospectiveMeeting from 'server/graphql/types/RetrospectiveMeeting'
import GenericMeetingPhase from 'server/graphql/types/GenericMeetingPhase'
import DiscussPhase from 'server/graphql/types/DiscussPhase'
import ReflectPhase from 'server/graphql/types/ReflectPhase'
import CheckInPhase from 'server/graphql/types/CheckInPhase'
import RetrospectiveMeetingSettings from 'server/graphql/types/RetrospectiveMeetingSettings'
import ActionMeetingSettings from 'server/graphql/types/ActionMeetingSettings'
import RetrospectiveMeetingMember from 'server/graphql/types/RetrospectiveMeetingMember'
import AuthToken from 'server/graphql/types/AuthToken'

export default new GraphQLSchema({
  query,
  mutation,
  subscription,
  types: [
    CheckInPhase,
    ReflectPhase,
    DiscussPhase,
    GenericMeetingPhase,
    NotificationTeamInvitation,
    NotifyPromoteToOrgLeader,
    RetroPhaseItem,
    RetrospectiveMeeting,
    RetrospectiveMeetingMember,
    RetrospectiveMeetingSettings,
    ActionMeetingSettings,
    AuthToken
  ]
})

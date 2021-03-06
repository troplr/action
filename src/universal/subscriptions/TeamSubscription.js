import {acceptTeamInviteTeamUpdater} from 'universal/mutations/AcceptTeamInviteMutation'
import {
  addOrgMutationNotificationOnNext,
  addOrgMutationNotificationUpdater
} from 'universal/mutations/AddOrgMutation'
import {
  addTeamMutationNotificationUpdater,
  addTeamTeamUpdater
} from 'universal/mutations/AddTeamMutation'
import {
  archiveTeamTeamOnNext,
  archiveTeamTeamUpdater
} from 'universal/mutations/ArchiveTeamMutation'
import {createReflectionTeamUpdater} from 'universal/mutations/CreateReflectionMutation'
import {endMeetingTeamUpdater} from 'universal/mutations/EndMeetingMutation'
import {inviteTeamMembersTeamUpdater} from 'universal/mutations/InviteTeamMembersMutation'
import {killMeetingTeamUpdater} from 'universal/mutations/KillMeetingMutation'
import {promoteFacilitatorTeamOnNext} from 'universal/mutations/PromoteFacilitatorMutation'
import {removeReflectionTeamUpdater} from 'universal/mutations/RemoveReflectionMutation'
import {
  removeTeamMemberTeamOnNext,
  removeTeamMemberTeamUpdater
} from 'universal/mutations/RemoveTeamMemberMutation'
import {requestFacilitatorTeamOnNext} from 'universal/mutations/RequestFacilitatorMutation'
import {
  removeOrgUserTeamOnNext,
  removeOrgUserTeamUpdater
} from 'universal/mutations/RemoveOrgUserMutation'
import {startNewMeetingTeamOnNext} from 'universal/mutations/StartNewMeetingMutation'
import {navigateMeetingTeamUpdater} from 'universal/mutations/NavigateMeetingMutation'
import {promoteNewMeetingFacilitatorTeamOnNext} from 'universal/mutations/PromoteNewMeetingFacilitatorMutation'
import {editReflectionTeamUpdater} from 'universal/mutations/EditReflectionMutation'
import {endNewMeetingTeamOnNext} from 'universal/mutations/EndNewMeetingMutation'
import {updateDragLocationTeamUpdater} from 'universal/mutations/UpdateDragLocationMutation'
import {
  endDraggingReflectionTeamOnNext,
  endDraggingReflectionTeamUpdater
} from 'universal/mutations/EndDraggingReflectionMutation'
import {dragDiscussionTopicTeamUpdater} from 'universal/mutations/DragDiscussionTopicMutation'
import {startDraggingReflectionTeamUpdater} from 'universal/mutations/StartDraggingReflectionMutation'
import {
  autoGroupReflectionsTeamOnNext,
  autoGroupReflectionsTeamUpdater
} from 'universal/mutations/AutoGroupReflectionsMutation'
import {addReflectTemplateTeamUpdater} from 'universal/mutations/AddReflectTemplateMutation'
import {removeReflectTemplateTeamUpdater} from 'universal/mutations/RemoveReflectTemplateMutation'
import {addReflectTemplatePromptTeamUpdater} from 'universal/mutations/AddReflectTemplatePromptMutation'
import {removeReflectTemplatePromptTeamUpdater} from 'universal/mutations/RemoveReflectTemplatePromptMutation'
import {moveReflectTemplatePromptTeamUpdater} from 'universal/mutations/MoveReflectTemplatePromptMutation'
import {
  acceptTeamInvitationTeamOnNext,
  acceptTeamInvitationTeamUpdater
} from 'universal/mutations/AcceptTeamInvitationMutation'

const subscription = graphql`
  subscription TeamSubscription {
    teamSubscription {
      __typename
      ...AcceptTeamInvitationMutation_team @relay(mask: false)
      ...AcceptTeamInviteMutation_team @relay(mask: false)
      ...AddReflectTemplateMutation_team @relay(mask: false)
      ...AddReflectTemplatePromptMutation_team @relay(mask: false)
      ...AddTeamMutation_team @relay(mask: false)
      ...AddTeamMutation_team @relay(mask: false)
      ...ArchiveTeamMutation_team @relay(mask: false)
      ...AutoGroupReflectionsMutation_team @relay(mask: false)
      ...CreateReflectionMutation_team @relay(mask: false)
      ...DragDiscussionTopicMutation_team @relay(mask: false)
      ...EditReflectionMutation_team @relay(mask: false)
      ...EndDraggingReflectionMutation_team @relay(mask: false)
      ...EndMeetingMutation_team @relay(mask: false)
      ...KillMeetingMutation_team @relay(mask: false)
      ...EndNewMeetingMutation_team @relay(mask: false)
      ...MoveMeetingMutation_team @relay(mask: false)
      ...MoveReflectTemplatePromptMutation_team @relay(mask: false)
      ...NavigateMeetingMutation_team @relay(mask: false)
      ...NewMeetingCheckInMutation_team @relay(mask: false)
      ...PromoteFacilitatorMutation_team @relay(mask: false)
      ...PromoteNewMeetingFacilitatorMutation_team @relay(mask: false)
      ...PromoteToTeamLeadMutation_team @relay(mask: false)
      ...RemoveReflectionMutation_team @relay(mask: false)
      ...RemoveReflectTemplateMutation_team @relay(mask: false)
      ...RemoveReflectTemplatePromptMutation_team @relay(mask: false)
      ...RemoveTeamMemberMutation_team @relay(mask: false)
      ...RemoveOrgUserMutation_team @relay(mask: false)
      ...RenameReflectTemplateMutation_team @relay(mask: false)
      ...RenameReflectTemplatePromptMutation_team @relay(mask: false)
      ...RequestFacilitatorMutation_team @relay(mask: false)
      ...SelectRetroTemplateMutation_team @relay(mask: false)
      ...SetPhaseFocusMutation_team @relay(mask: false)
      ...StartDraggingReflectionMutation_team @relay(mask: false)
      ...StartMeetingMutation_team @relay(mask: false)
      ...StartNewMeetingMutation_team @relay(mask: false)
      ...UpdateCheckInQuestionMutation_team @relay(mask: false)
      ...UpdateNewCheckInQuestionMutation_team @relay(mask: false)
      ...UpdateCreditCardMutation_team @relay(mask: false)
      ...UpdateDragLocationMutation_team @relay(mask: false)
      ...UpdateReflectionContentMutation_team @relay(mask: false)
      ...UpdateReflectionGroupTitleMutation_team @relay(mask: false)
      ...UpdateTeamNameMutation_team @relay(mask: false)
      ...UpgradeToProMutation_team @relay(mask: false)
      ...VoteForReflectionGroupMutation_team @relay(mask: false)
    }
  }
`

const onNextHandlers = {
  AcceptTeamInvitationPayload: acceptTeamInvitationTeamOnNext,
  AutoGroupReflectionsPayload: autoGroupReflectionsTeamOnNext,
  AddOrgCreatorPayload: addOrgMutationNotificationOnNext,
  ArchiveTeamPayload: archiveTeamTeamOnNext,
  EndNewMeetingPayload: endNewMeetingTeamOnNext,
  StartNewMeetingPayload: startNewMeetingTeamOnNext,
  PromoteFacilitatorPayload: promoteFacilitatorTeamOnNext,
  PromoteNewMeetingFacilitatorPayload: promoteNewMeetingFacilitatorTeamOnNext,
  RemoveOrgUserPayload: removeOrgUserTeamOnNext,
  EndDraggingReflectionPayload: endDraggingReflectionTeamOnNext,
  RemoveTeamMemberPayload: removeTeamMemberTeamOnNext,
  RequestFacilitatorPayload: requestFacilitatorTeamOnNext
}

const TeamSubscription = (environment, queryVariables, subParams) => {
  const {history} = subParams
  const {viewerId} = environment
  return {
    subscription,
    variables: {},
    updater: (store) => {
      const payload = store.getRootField('teamSubscription')
      if (!payload) return
      const type = payload.getValue('__typename')
      switch (type) {
        case 'AcceptTeamInvitationPayload':
          acceptTeamInvitationTeamUpdater(payload, {store, atmosphere: environment})
          break
        case 'AcceptTeamInvitePayload':
          acceptTeamInviteTeamUpdater(payload, store, viewerId)
          break
        case 'AddOrgCreatorPayload':
          addOrgMutationNotificationUpdater(payload, store, viewerId)
          break
        case 'AddReflectTemplatePayload':
          addReflectTemplateTeamUpdater(payload, {store})
          break
        case 'AddReflectTemplatePromptPayload':
          addReflectTemplatePromptTeamUpdater(payload, {store})
          break
        case 'AddTeamCreatorPayload':
          addTeamMutationNotificationUpdater(payload, store, viewerId)
          break
        case 'AutoGroupReflectionsPayload':
          autoGroupReflectionsTeamUpdater(payload, {atmosphere: environment, store})
          break
        case 'CreateGitHubIssuePayload':
          break
        case 'CreateReflectionPayload':
          createReflectionTeamUpdater(payload, store)
          break
        case 'EndDraggingReflectionPayload':
          endDraggingReflectionTeamUpdater(payload, {atmosphere: environment, store})
          break
        case 'DragDiscussionTopicPayload':
          dragDiscussionTopicTeamUpdater(payload, {store})
          break
        case 'RequestFacilitatorPayload':
          break
        case 'AddTeamMutationPayload':
          addTeamTeamUpdater(payload, store, viewerId)
          break
        case 'ArchiveTeamPayload':
          archiveTeamTeamUpdater(payload, store, viewerId)
          break
        case 'EditReflectionPayload':
          editReflectionTeamUpdater(payload, store)
          break
        case 'EndMeetingPayload':
          endMeetingTeamUpdater(payload, {atmosphere: environment, history})
          break
        case 'EndNewMeetingPayload':
          break
        case 'InviteTeamMembersPayload':
          inviteTeamMembersTeamUpdater(payload, store, viewerId)
          break
        case 'KillMeetingPayload':
          killMeetingTeamUpdater()
          break
        case 'MeetingCheckInPayload':
          break
        case 'MoveMeetingPayload':
          break
        case 'MoveReflectTemplatePromptPayload':
          moveReflectTemplatePromptTeamUpdater(payload, {store})
          break
        case 'NavigateMeetingPayload':
          navigateMeetingTeamUpdater(payload, store, viewerId)
          break
        case 'NewMeetingCheckInPayload':
          break
        case 'PromoteFacilitatorPayload':
          break
        case 'PromoteToTeamLeadPayload':
          break
        case 'PromoteNewMeetingFacilitatorPayload':
          break
        case 'RemoveOrgUserPayload':
          removeOrgUserTeamUpdater(payload, store, viewerId)
          break
        case 'RemoveReflectTemplatePayload':
          removeReflectTemplateTeamUpdater(payload, {store, viewerId})
          break
        case 'RemoveReflectTemplatePromptPayload':
          removeReflectTemplatePromptTeamUpdater(payload, {store})
          break
        case 'RemoveReflectionPayload':
          removeReflectionTeamUpdater(payload, store)
          break
        case 'RemoveTeamMemberPayload':
          removeTeamMemberTeamUpdater(payload, store, viewerId)
          break
        case 'RenameReflectTemplatePayload':
          break
        case 'RenameReflectTemplatePromptPayload':
          break
        case 'SelectRetroTemplatePayload':
          break
        case 'SetPhaseFocusPayload':
          break
        case 'StartDraggingReflectionPayload':
          startDraggingReflectionTeamUpdater(payload, {atmosphere: environment, store})
          break
        case 'StartMeetingPayload':
          break
        case 'StartNewMeetingPayload':
          break
        case 'UpdateCreditCardPayload':
          break
        case 'UpdateCheckInQuestionPayload':
          break
        case 'UpdateDragLocationPayload':
          updateDragLocationTeamUpdater(payload, {atmosphere: environment, store})
          break
        case 'UpdateNewCheckInQuestionPayload':
          break
        case 'UpdateReflectionContentPayload':
          break
        case 'UpdateReflectionGroupTitlePayload':
          break
        case 'UpgradeToProPayload':
          break
        case 'VoteForReflectionGroupPayload':
          break
        default:
          console.error('TeamSubscription case fail', type)
      }
    },
    onNext: ({teamSubscription}) => {
      const {__typename: type} = teamSubscription
      const handler = onNextHandlers[type]
      if (handler) {
        handler(teamSubscription, {...subParams, atmosphere: environment})
      }
    }
  }
}

export default TeamSubscription

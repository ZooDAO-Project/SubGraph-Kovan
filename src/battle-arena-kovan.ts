import {
  AddedDaiToVoting as AddedDaiToVotingEvent,
  AddedZooToVoting as AddedZooToVotingEvent,
  ChosenWinner as ChosenWinnerEvent,
  ClaimedRewardFromStaking as ClaimedRewardFromStakingEvent,
  ClaimedRewardFromVoting as ClaimedRewardFromVotingEvent,
  CreatedStakerPosition as CreatedStakerPositionEvent,
  CreatedVotingPosition as CreatedVotingPositionEvent,
  EpochUpdated as EpochUpdatedEvent,
  LiquidatedVotingPosition as LiquidatedVotingPositionEvent,
  BATTLE_ARENA_KOVANOwnershipTransferred as BATTLE_ARENA_KOVANOwnershipTransferredEvent,
  PairedNft as PairedNftEvent,
  RecomputedDaiVotes as RecomputedDaiVotesEvent,
  RecomputedZooVotes as RecomputedZooVotesEvent,
  RemovedStakerPosition as RemovedStakerPositionEvent,
  WithdrawedDaiFromVoting as WithdrawedDaiFromVotingEvent,
  WithdrawedZooFromVoting as WithdrawedZooFromVotingEvent
} from "../generated/BATTLE_ARENA_KOVAN/BATTLE_ARENA_KOVAN"
import {
  AddedDaiToVoting,
  AddedZooToVoting,
  ChosenWinner,
  ClaimedRewardFromStaking,
  ClaimedRewardFromVoting,
  CreatedStakerPosition,
  CreatedVotingPosition,
  EpochUpdated,
  LiquidatedVotingPosition,
  BATTLE_ARENA_KOVANOwnershipTransferred,
  PairedNft,
  RecomputedDaiVotes,
  RecomputedZooVotes,
  RemovedStakerPosition,
  WithdrawedDaiFromVoting,
  WithdrawedZooFromVoting
} from "../generated/schema"

export function handleAddedDaiToVoting(event: AddedDaiToVotingEvent): void {
  let entity = new AddedDaiToVoting(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.votingPositionId = event.params.votingPositionId
  entity.amount = event.params.amount
  entity.votes = event.params.votes
  entity.save()
}

export function handleAddedZooToVoting(event: AddedZooToVotingEvent): void {
  let entity = new AddedZooToVoting(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.votingPositionId = event.params.votingPositionId
  entity.amount = event.params.amount
  entity.votes = event.params.votes
  entity.save()
}

export function handleChosenWinner(event: ChosenWinnerEvent): void {
  let entity = new ChosenWinner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.fighter1 = event.params.fighter1
  entity.fighter2 = event.params.fighter2
  entity.winner = event.params.winner
  entity.pairIndex = event.params.pairIndex
  entity.playedPairsAmount = event.params.playedPairsAmount
  entity.save()
}

export function handleClaimedRewardFromStaking(
  event: ClaimedRewardFromStakingEvent
): void {
  let entity = new ClaimedRewardFromStaking(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.staker = event.params.staker
  entity.stakingPositionId = event.params.stakingPositionId
  entity.beneficiary = event.params.beneficiary
  entity.yTokenReward = event.params.yTokenReward
  entity.daiReward = event.params.daiReward
  entity.save()
}

export function handleClaimedRewardFromVoting(
  event: ClaimedRewardFromVotingEvent
): void {
  let entity = new ClaimedRewardFromVoting(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.beneficiary = event.params.beneficiary
  entity.yTokenReward = event.params.yTokenReward
  entity.daiReward = event.params.daiReward
  entity.votingPositionId = event.params.votingPositionId
  entity.save()
}

export function handleCreatedStakerPosition(
  event: CreatedStakerPositionEvent
): void {
  let entity = new CreatedStakerPosition(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.staker = event.params.staker
  entity.stakingPositionId = event.params.stakingPositionId
  entity.save()
}

export function handleCreatedVotingPosition(
  event: CreatedVotingPositionEvent
): void {
  let entity = new CreatedVotingPosition(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.daiAmount = event.params.daiAmount
  entity.votes = event.params.votes
  entity.votingPositionId = event.params.votingPositionId
  entity.save()
}

export function handleEpochUpdated(event: EpochUpdatedEvent): void {
  let entity = new EpochUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.date = event.params.date
  entity.newEpoch = event.params.newEpoch
  entity.save()
}

export function handleLiquidatedVotingPosition(
  event: LiquidatedVotingPositionEvent
): void {
  let entity = new LiquidatedVotingPosition(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.beneficiary = event.params.beneficiary
  entity.votingPositionId = event.params.votingPositionId
  entity.zooReturned = event.params.zooReturned
  entity.daiReceived = event.params.daiReceived
  entity.save()
}

export function handleBATTLE_ARENA_KOVANOwnershipTransferred(
  event: BATTLE_ARENA_KOVANOwnershipTransferredEvent
): void {
  let entity = new BATTLE_ARENA_KOVANOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePairedNft(event: PairedNftEvent): void {
  let entity = new PairedNft(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.fighter1 = event.params.fighter1
  entity.fighter2 = event.params.fighter2
  entity.pairIndex = event.params.pairIndex
  entity.save()
}

export function handleRecomputedDaiVotes(event: RecomputedDaiVotesEvent): void {
  let entity = new RecomputedDaiVotes(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.votingPositionId = event.params.votingPositionId
  entity.newVotes = event.params.newVotes
  entity.oldVotes = event.params.oldVotes
  entity.save()
}

export function handleRecomputedZooVotes(event: RecomputedZooVotesEvent): void {
  let entity = new RecomputedZooVotes(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.votingPositionId = event.params.votingPositionId
  entity.newVotes = event.params.newVotes
  entity.oldVotes = event.params.oldVotes
  entity.save()
}

export function handleRemovedStakerPosition(
  event: RemovedStakerPositionEvent
): void {
  let entity = new RemovedStakerPosition(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.staker = event.params.staker
  entity.stakingPositionId = event.params.stakingPositionId
  entity.save()
}

export function handleWithdrawedDaiFromVoting(
  event: WithdrawedDaiFromVotingEvent
): void {
  let entity = new WithdrawedDaiFromVoting(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.votingPositionId = event.params.votingPositionId
  entity.daiNumber = event.params.daiNumber
  entity.beneficiary = event.params.beneficiary
  entity.save()
}

export function handleWithdrawedZooFromVoting(
  event: WithdrawedZooFromVotingEvent
): void {
  let entity = new WithdrawedZooFromVoting(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.currentEpoch = event.params.currentEpoch
  entity.voter = event.params.voter
  entity.stakingPositionId = event.params.stakingPositionId
  entity.votingPositionId = event.params.votingPositionId
  entity.zooNumber = event.params.zooNumber
  entity.beneficiary = event.params.beneficiary
  entity.save()
}

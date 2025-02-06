import {
  BridgeCallTriggered as BridgeCallTriggeredEvent,
  InboxToggle as InboxToggleEvent,
  MessageDelivered as MessageDeliveredEvent,
  OutboxToggle as OutboxToggleEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/OldBridge/OldBridge"
import {
  BridgeCallTriggered,
  InboxToggle,
  MessageDelivered,
  OutboxToggle,
  OwnershipTransferred
} from "../generated/schema"

export function handleBridgeCallTriggered(
  event: BridgeCallTriggeredEvent
): void {
  let entity = new BridgeCallTriggered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.outbox = event.params.outbox
  entity.destAddr = event.params.destAddr
  entity.amount = event.params.amount
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInboxToggle(event: InboxToggleEvent): void {
  let entity = new InboxToggle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.inbox = event.params.inbox
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageDelivered(event: MessageDeliveredEvent): void {
  let entity = new MessageDelivered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageIndex = event.params.messageIndex
  entity.beforeInboxAcc = event.params.beforeInboxAcc
  entity.inbox = event.params.inbox
  entity.kind = event.params.kind
  entity.sender = event.params.sender
  entity.messageDataHash = event.params.messageDataHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOutboxToggle(event: OutboxToggleEvent): void {
  let entity = new OutboxToggle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.outbox = event.params.outbox
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AllowListAddressSet,
  AllowListEnabledUpdated,
  InboxMessageDelivered,
  InboxMessageDeliveredFromOrigin,
  Paused,
  Unpaused
} from "../generated/Inbox/Inbox"

export function createAllowListAddressSetEvent(
  user: Address,
  val: boolean
): AllowListAddressSet {
  let allowListAddressSetEvent = changetype<AllowListAddressSet>(newMockEvent())

  allowListAddressSetEvent.parameters = new Array()

  allowListAddressSetEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  allowListAddressSetEvent.parameters.push(
    new ethereum.EventParam("val", ethereum.Value.fromBoolean(val))
  )

  return allowListAddressSetEvent
}

export function createAllowListEnabledUpdatedEvent(
  isEnabled: boolean
): AllowListEnabledUpdated {
  let allowListEnabledUpdatedEvent =
    changetype<AllowListEnabledUpdated>(newMockEvent())

  allowListEnabledUpdatedEvent.parameters = new Array()

  allowListEnabledUpdatedEvent.parameters.push(
    new ethereum.EventParam("isEnabled", ethereum.Value.fromBoolean(isEnabled))
  )

  return allowListEnabledUpdatedEvent
}

export function createInboxMessageDeliveredEvent(
  messageNum: BigInt,
  data: Bytes
): InboxMessageDelivered {
  let inboxMessageDeliveredEvent =
    changetype<InboxMessageDelivered>(newMockEvent())

  inboxMessageDeliveredEvent.parameters = new Array()

  inboxMessageDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "messageNum",
      ethereum.Value.fromUnsignedBigInt(messageNum)
    )
  )
  inboxMessageDeliveredEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return inboxMessageDeliveredEvent
}

export function createInboxMessageDeliveredFromOriginEvent(
  messageNum: BigInt
): InboxMessageDeliveredFromOrigin {
  let inboxMessageDeliveredFromOriginEvent =
    changetype<InboxMessageDeliveredFromOrigin>(newMockEvent())

  inboxMessageDeliveredFromOriginEvent.parameters = new Array()

  inboxMessageDeliveredFromOriginEvent.parameters.push(
    new ethereum.EventParam(
      "messageNum",
      ethereum.Value.fromUnsignedBigInt(messageNum)
    )
  )

  return inboxMessageDeliveredFromOriginEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

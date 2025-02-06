import { ethereum } from "@graphprotocol/graph-ts"
import {
  InboxMessageDelivered as InboxMessageDeliveredEvent,
  InboxMessageDeliveredFromOrigin as InboxMessageDeliveredFromOriginEvent,
} from "../generated/Inbox/Inbox"
import {
  InboxMessageDelivered,
  InboxMessageDeliveredFromOrigin,
  DepositEthCall,
  DepositEthDeprecatedCall,
  BridgeTransfer
} from "../generated/schema"
import { BigInt, log } from "@graphprotocol/graph-ts"

export function handleInboxMessageDelivered(
  event: InboxMessageDeliveredEvent,
): void {
  let entity = new InboxMessageDelivered(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageNum = event.params.messageNum
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInboxMessageDeliveredFromOrigin(
  event: InboxMessageDeliveredFromOriginEvent,
): void {
  let entity = new InboxMessageDeliveredFromOrigin(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageNum = event.params.messageNum

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositETH(call: ethereum.Call): void {
  log.info("beggining of the call : ", [call.transaction.hash.toHexString(), call.block.number.toString()])
  if (call.block.number <= BigInt.fromI32(15447144))
  {
    log.info("call inside the if statement : ", [call.transaction.hash.toHexString(), call.block.number.toString()])
      let id = call.transaction.hash.toHex();
      let newBridge = new DepositEthCall(id);
      newBridge.id = id;
      newBridge.blockNumber = call.block.number;
      newBridge.transactionHash = call.transaction.hash;
      newBridge.amount = call.transaction.value;
      newBridge.save();
      let newBridgeTransfer = new BridgeTransfer(call.transaction.hash);
      newBridgeTransfer.amount = newBridge.amount;
      newBridgeTransfer.blockNumber = newBridge.blockNumber;
      newBridgeTransfer.from = call.transaction.from;
      newBridgeTransfer.to = call.to;
      newBridgeTransfer.hash = call.transaction.hash;
      newBridgeTransfer.logIndex = 0;
      newBridgeTransfer.timestamp = call.block.timestamp;
      newBridgeTransfer.transferFrom = call.transaction.from;
      newBridgeTransfer.transferTo = call.to
      newBridgeTransfer.save()
  }
}

export function handleDepositETHDeprecated(call: ethereum.Call): void {
  log.info("beggining of the deprecated call : ", [call.transaction.hash.toHexString(), call.block.number.toString()])
  if (call.block.number <= BigInt.fromI32(15447144))
  {
      log.info("deprecated call inside the if statement : ", [call.transaction.hash.toHexString(), call.block.number.toString()])
      let id = call.transaction.hash.toHex();
      let newBridge = new DepositEthDeprecatedCall(id);
      newBridge.id = id;
      newBridge.blockNumber = call.block.number;
      newBridge.transactionHash = call.transaction.hash;
      newBridge.amount = call.transaction.value;
      newBridge.save();
      let newBridgeTransfer = new BridgeTransfer(call.transaction.hash);
      newBridgeTransfer.amount = newBridge.amount;
      newBridgeTransfer.blockNumber = newBridge.blockNumber;
      newBridgeTransfer.from = call.transaction.from;
      newBridgeTransfer.to = call.to;
      newBridgeTransfer.hash = call.transaction.hash;
      newBridgeTransfer.logIndex = 0;
      newBridgeTransfer.timestamp = call.block.timestamp;
      newBridgeTransfer.transferFrom = call.transaction.from;
      newBridgeTransfer.transferTo = call.to
      newBridgeTransfer.save()
  }
}

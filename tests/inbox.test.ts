import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AllowListAddressSet } from "../generated/schema"
import { AllowListAddressSet as AllowListAddressSetEvent } from "../generated/Inbox/Inbox"
import { handleAllowListAddressSet } from "../src/inbox"
import { createAllowListAddressSetEvent } from "./inbox-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let val = "boolean Not implemented"
    let newAllowListAddressSetEvent = createAllowListAddressSetEvent(user, val)
    handleAllowListAddressSet(newAllowListAddressSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AllowListAddressSet created and stored", () => {
    assert.entityCount("AllowListAddressSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AllowListAddressSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllowListAddressSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "val",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

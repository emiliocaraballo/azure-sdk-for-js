/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.
 *
 * @summary This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/VirtualNetworkGatewayGetAdvertisedRoutes.json
 */
async function getVirtualNetworkGatewayAdvertisedRoutes() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const peer = "test";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginGetAdvertisedRoutesAndWait(
    resourceGroupName,
    virtualNetworkGatewayName,
    peer
  );
  console.log(result);
}

async function main() {
  getVirtualNetworkGatewayAdvertisedRoutes();
}

main().catch(console.error);

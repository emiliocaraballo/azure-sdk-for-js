/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  VirtualNetworkPeering,
  VirtualNetworkPeeringsCreateOrUpdateOptionalParams,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a peering in the specified virtual network.
 *
 * @summary Creates or updates a peering in the specified virtual network.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/VirtualNetworkPeeringCreate.json
 */
async function createPeering() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "peerTest";
  const virtualNetworkName = "vnet1";
  const virtualNetworkPeeringName = "peer";
  const virtualNetworkPeeringParameters: VirtualNetworkPeering = {
    allowForwardedTraffic: true,
    allowGatewayTransit: false,
    allowVirtualNetworkAccess: true,
    remoteVirtualNetwork: {
      id:
        "/subscriptions/subid/resourceGroups/peerTest/providers/Microsoft.Network/virtualNetworks/vnet2"
    },
    useRemoteGateways: false
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkPeerings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualNetworkName,
    virtualNetworkPeeringName,
    virtualNetworkPeeringParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a peering in the specified virtual network.
 *
 * @summary Creates or updates a peering in the specified virtual network.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/VirtualNetworkPeeringCreateWithRemoteVirtualNetworkEncryption.json
 */
async function createPeeringWithRemoteVirtualNetworkEncryption() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "peerTest";
  const virtualNetworkName = "vnet1";
  const virtualNetworkPeeringName = "peer";
  const virtualNetworkPeeringParameters: VirtualNetworkPeering = {
    allowForwardedTraffic: true,
    allowGatewayTransit: false,
    allowVirtualNetworkAccess: true,
    remoteVirtualNetwork: {
      id:
        "/subscriptions/subid/resourceGroups/peerTest/providers/Microsoft.Network/virtualNetworks/vnet2"
    },
    useRemoteGateways: false
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkPeerings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualNetworkName,
    virtualNetworkPeeringName,
    virtualNetworkPeeringParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a peering in the specified virtual network.
 *
 * @summary Creates or updates a peering in the specified virtual network.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/VirtualNetworkPeeringSync.json
 */
async function syncPeering() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "peerTest";
  const virtualNetworkName = "vnet1";
  const virtualNetworkPeeringName = "peer";
  const syncRemoteAddressSpace = "true";
  const virtualNetworkPeeringParameters: VirtualNetworkPeering = {
    allowForwardedTraffic: true,
    allowGatewayTransit: false,
    allowVirtualNetworkAccess: true,
    remoteVirtualNetwork: {
      id:
        "/subscriptions/subid/resourceGroups/peerTest/providers/Microsoft.Network/virtualNetworks/vnet2"
    },
    useRemoteGateways: false
  };
  const options: VirtualNetworkPeeringsCreateOrUpdateOptionalParams = {
    syncRemoteAddressSpace
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkPeerings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualNetworkName,
    virtualNetworkPeeringName,
    virtualNetworkPeeringParameters,
    options
  );
  console.log(result);
}

async function main() {
  createPeering();
  createPeeringWithRemoteVirtualNetworkEncryption();
  syncPeering();
}

main().catch(console.error);

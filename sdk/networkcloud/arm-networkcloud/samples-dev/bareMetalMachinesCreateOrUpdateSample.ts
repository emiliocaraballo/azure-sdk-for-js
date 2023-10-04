/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BareMetalMachine, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a new bare metal machine or update the properties of the existing one.
All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @summary Create a new bare metal machine or update the properties of the existing one.
All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/stable/2023-07-01/examples/BareMetalMachines_Create.json
 */
async function createOrUpdateBareMetalMachine() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const bareMetalMachineName = "bareMetalMachineName";
  const bareMetalMachineParameters: BareMetalMachine = {
    bmcConnectionString: "bmcconnectionstring",
    bmcCredentials: { password: "{password}", username: "bmcuser" },
    bmcMacAddress: "00:00:4f:00:57:00",
    bootMacAddress: "00:00:4e:00:58:af",
    extendedLocation: {
      name:
        "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation"
    },
    location: "location",
    machineDetails: "User-provided machine details.",
    machineName: "r01c001",
    machineSkuId: "684E-3B16-399E",
    rackId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/racks/rackName",
    rackSlot: 1,
    serialNumber: "BM1219XXX",
    tags: { key1: "myvalue1", key2: "myvalue2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.bareMetalMachines.beginCreateOrUpdateAndWait(
    resourceGroupName,
    bareMetalMachineName,
    bareMetalMachineParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateBareMetalMachine();
}

main().catch(console.error);

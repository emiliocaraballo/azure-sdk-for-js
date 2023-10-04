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
 * This sample demonstrates how to Retrieves the details of a ConfigurationPolicyGroup.
 *
 * @summary Retrieves the details of a ConfigurationPolicyGroup.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/ConfigurationPolicyGroupGet.json
 */
async function configurationPolicyGroupGet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const vpnServerConfigurationName = "vpnServerConfiguration1";
  const configurationPolicyGroupName = "policyGroup1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationPolicyGroups.get(
    resourceGroupName,
    vpnServerConfigurationName,
    configurationPolicyGroupName
  );
  console.log(result);
}

async function main() {
  configurationPolicyGroupGet();
}

main().catch(console.error);

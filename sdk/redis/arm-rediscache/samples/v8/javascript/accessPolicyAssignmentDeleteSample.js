/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RedisManagementClient } = require("@azure/arm-rediscache");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes the access policy assignment from a redis cache
 *
 * @summary Deletes the access policy assignment from a redis cache
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2023-08-01/examples/RedisCacheAccessPolicyAssignmentDelete.json
 */
async function redisCacheAccessPolicyAssignmentDelete() {
  const subscriptionId = process.env["REDIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["REDIS_RESOURCE_GROUP"] || "rg1";
  const cacheName = "cache1";
  const accessPolicyAssignmentName = "accessPolicyAssignmentName1";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.accessPolicyAssignment.beginDeleteAndWait(
    resourceGroupName,
    cacheName,
    accessPolicyAssignmentName
  );
  console.log(result);
}

async function main() {
  redisCacheAccessPolicyAssignmentDelete();
}

main().catch(console.error);

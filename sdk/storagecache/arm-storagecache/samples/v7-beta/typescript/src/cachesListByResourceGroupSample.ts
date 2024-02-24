/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageCacheManagementClient } from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns all caches the user has access to under a resource group.
 *
 * @summary Returns all caches the user has access to under a resource group.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/preview/2023-11-01-preview/examples/Caches_ListByResourceGroup.json
 */
async function cachesListByResourceGroup() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.caches.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  cachesListByResourceGroup();
}

main().catch(console.error);

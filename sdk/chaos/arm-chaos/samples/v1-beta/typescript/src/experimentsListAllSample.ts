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
  ExperimentsListAllOptionalParams,
  ChaosManagementClient
} from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a list of Experiment resources in a subscription.
 *
 * @summary Get a list of Experiment resources in a subscription.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2023-04-15-preview/examples/ListExperimentsInASubscription.json
 */
async function listAllExperimentsInASubscription() {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] ||
    "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const continuationToken = undefined;
  const options: ExperimentsListAllOptionalParams = { continuationToken };
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.experiments.listAll(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllExperimentsInASubscription();
}

main().catch(console.error);

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
  ManagedProxyRequest,
  HybridConnectivityManagementAPI
} from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Fetches the managed proxy details
 *
 * @summary Fetches the managed proxy details
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/EndpointsPostListManagedProxyDetails.json
 */
async function hybridConnectivityEndpointsPostListManagedProxyDetails() {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/arcGroup/providers/Microsoft.Compute/virtualMachines/vm00006";
  const endpointName = "default";
  const managedProxyRequest: ManagedProxyRequest = {
    hostname: "r.proxy.arc.com",
    service: "127.0.0.1:65035",
    serviceName: "WAC"
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.endpoints.listManagedProxyDetails(
    resourceUri,
    endpointName,
    managedProxyRequest
  );
  console.log(result);
}

async function main() {
  hybridConnectivityEndpointsPostListManagedProxyDetails();
}

main().catch(console.error);

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a credential set for a container registry with the specified parameters.
 *
 * @summary Creates a credential set for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2023-08-01-preview/examples/CredentialSetCreate.json
 */
async function credentialSetCreate() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const credentialSetName = "myCredentialSet";
  const credentialSetCreateParameters = {
    authCredentials: [
      {
        name: "Credential1",
        passwordSecretIdentifier: "https://myvault.vault.azure.net/secrets/password",
        usernameSecretIdentifier: "https://myvault.vault.azure.net/secrets/username",
      },
    ],
    identity: { type: "SystemAssigned" },
    loginServer: "docker.io",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.credentialSets.beginCreateAndWait(
    resourceGroupName,
    registryName,
    credentialSetName,
    credentialSetCreateParameters
  );
  console.log(result);
}

async function main() {
  credentialSetCreate();
}

main().catch(console.error);

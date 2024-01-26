/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { MicrosoftNetworkAnalytics } from "../src/microsoftNetworkAnalytics";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("NetworkAnalytics test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: MicrosoftNetworkAnalytics;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new MicrosoftNetworkAnalytics(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus2euap";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";

  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("operation list test", async function () {
    const resArray = new Array();
    for await (let item of client.operations.list()) {
      resArray.push(item);
    }
    assert.notEqual(resArray.length, 0);
  });

  it.skip("dataProducts create test", async function () {
    const res = await client.dataProducts.beginCreateAndWait(
      resourceGroup,
      resourcename,
      {
        location,
        properties: {
          majorVersion: "1",
          product: "MCC",
          publisher: "Microsoft"
        }
      },
      testPollingOptions);
    assert.equal(res.name, resourcename);
  }).timeout(14400000);

  it("dataProducts get test", async function () {
    const res = await client.dataProducts.get(
      resourceGroup,
      resourcename);
    assert.equal(res.name, resourcename);
  });

  it("dataProducts list test", async function () {
    const resArray = new Array();
    for await (let item of client.dataProducts.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("dataProducts delete test", async function () {
    const resArray = new Array();
    const res = await client.dataProducts.beginDeleteAndWait(resourceGroup, resourcename
    )
    for await (let item of client.dataProducts.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

})

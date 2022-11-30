// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * This sample demonstrates how the sendNotification() method can be used to send a direct
 * notification using Firebase Legacy HTTP.  This sends a JSON message to an Firebase given registration ID and returns
 * a Tracking ID which can be used for troubleshooting with the Azure Notification Hubs team.
 *
 * See https://docs.microsoft.com/rest/api/notificationhubs/direct-send
 * to learn about Direct Send.
 *
 * @summary Demonstrates how to send direct notifications using Azure Notification Hubs
 * @azsdk-weight 100
 */

import * as process from "node/process.ts";
import {
  createFcmLegacyNotification,
  NotificationDetails,
  NotificationOutcomeState,
} from "npm:@azure/notification-hubs@1.0.0-beta.7/models";
import {
  createClientContext,
  getNotificationOutcomeDetails,
  NotificationHubsClientContext,
  sendNotification,
} from "npm:@azure/notification-hubs@1.0.0-beta.7/api";
import { isRestError } from "npm:@azure/core-rest-pipeline@1.10.0";

// Load the .env file if it exists
import { config } from "dotenv/mod.ts";

// Define connection string and hub name
const enviromentVariables = config({ safe: true });
const connectionString = enviromentVariables.NOTIFICATIONHUBS_CONNECTION_STRING;
const hubName = enviromentVariables.NOTIFICATION_HUB_NAME;

// Define message constants
const gcmRegistrationId = enviromentVariables.FCM_REGISTRATION_ID;

async function main() {
  const context = createClientContext(connectionString, hubName);

  const messageBody = `{
	"notification":{
		"title":"Notification Hub Test Notification",
		"body":"This is a sample notification delivered by Azure Notification Hubs."
	},
	"data":{
		"property1":"value1",
		"property2":42
	}
}`;

  const notification = createFcmLegacyNotification({
    body: messageBody,
  });

  const result = await sendNotification(context, notification, {
    deviceHandle: gcmRegistrationId,
  });

  console.log(`Direct send Tracking ID: ${result.trackingId}`);
  console.log(`Direct send Correlation ID: ${result.correlationId}`);

  // Only available in Standard SKU and above
  if (result.notificationId) {
    console.log(`Direct send Notification ID: ${result.notificationId}`);

    const results = await getNotificationDetails(
      context,
      result.notificationId,
    );
    if (results) {
      console.log(JSON.stringify(results, null, 2));
    }
  }
}

async function getNotificationDetails(
  context: NotificationHubsClientContext,
  notificationId: string,
): Promise<NotificationDetails | undefined> {
  let state: NotificationOutcomeState = "Enqueued";
  let count = 0;
  let result: NotificationDetails | undefined;
  while ((state === "Enqueued" || state === "Processing") && count++ < 10) {
    try {
      result = await getNotificationOutcomeDetails(context, notificationId);
      state = result.state!;
    } catch (e) {
      // Possible to get 404 for when it doesn't exist yet.
      if (isRestError(e) && e.statusCode === 404) {
        continue;
      } else {
        throw e;
      }
    }

    await delay(1000);
  }

  return result;
}

main().catch((err) => {
  console.log("sendDirectNotification Sample: Error occurred: ", err);
  process.exit(1);
});

function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
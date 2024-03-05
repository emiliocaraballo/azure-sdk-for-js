/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CallDialog } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CallAutomationApiClient } from "../callAutomationApiClient";
import {
  StartDialogRequest,
  CallDialogStartDialogOptionalParams,
  CallDialogStartDialogResponse,
  CallDialogStopDialogOptionalParams,
} from "../models";

/** Class containing CallDialog operations. */
export class CallDialogImpl implements CallDialog {
  private readonly client: CallAutomationApiClient;

  /**
   * Initialize a new instance of the class CallDialog class.
   * @param client Reference to the service client
   */
  constructor(client: CallAutomationApiClient) {
    this.client = client;
  }

  /**
   * Start a dialog.
   * @param callConnectionId The call connection id
   * @param dialogId The dialog id
   * @param startDialogRequest The start dialog request
   * @param options The options parameters.
   */
  startDialog(
    callConnectionId: string,
    dialogId: string,
    startDialogRequest: StartDialogRequest,
    options?: CallDialogStartDialogOptionalParams,
  ): Promise<CallDialogStartDialogResponse> {
    return this.client.sendOperationRequest(
      { callConnectionId, dialogId, startDialogRequest, options },
      startDialogOperationSpec,
    );
  }

  /**
   * Stop a dialog.
   * @param callConnectionId The call connection id
   * @param dialogId The dialog id
   * @param options The options parameters.
   */
  stopDialog(
    callConnectionId: string,
    dialogId: string,
    options?: CallDialogStopDialogOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { callConnectionId, dialogId, options },
      stopDialogOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const startDialogOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/dialogs/{dialogId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.DialogStateResponse,
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  requestBody: Parameters.startDialogRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.callConnectionId,
    Parameters.dialogId,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const stopDialogOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/dialogs/{dialogId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.operationCallbackUri],
  urlParameters: [
    Parameters.endpoint,
    Parameters.callConnectionId,
    Parameters.dialogId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};

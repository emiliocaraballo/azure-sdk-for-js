/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedVirtualNetworks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClient } from "../dataFactoryManagementClient";
import {
  ManagedVirtualNetworkResource,
  ManagedVirtualNetworksListByFactoryNextOptionalParams,
  ManagedVirtualNetworksListByFactoryOptionalParams,
  ManagedVirtualNetworksListByFactoryResponse,
  ManagedVirtualNetworksCreateOrUpdateOptionalParams,
  ManagedVirtualNetworksCreateOrUpdateResponse,
  ManagedVirtualNetworksGetOptionalParams,
  ManagedVirtualNetworksGetResponse,
  ManagedVirtualNetworksListByFactoryNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedVirtualNetworks operations. */
export class ManagedVirtualNetworksImpl implements ManagedVirtualNetworks {
  private readonly client: DataFactoryManagementClient;

  /**
   * Initialize a new instance of the class ManagedVirtualNetworks class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryManagementClient) {
    this.client = client;
  }

  /**
   * Lists managed Virtual Networks.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams,
  ): PagedAsyncIterableIterator<ManagedVirtualNetworkResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ManagedVirtualNetworkResource[]> {
    let result: ManagedVirtualNetworksListByFactoryResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByFactory(
        resourceGroupName,
        factoryName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams,
  ): AsyncIterableIterator<ManagedVirtualNetworkResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists managed Virtual Networks.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams,
  ): Promise<ManagedVirtualNetworksListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      listByFactoryOperationSpec,
    );
  }

  /**
   * Creates or updates a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedVirtualNetwork Managed Virtual Network resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedVirtualNetwork: ManagedVirtualNetworkResource,
    options?: ManagedVirtualNetworksCreateOrUpdateOptionalParams,
  ): Promise<ManagedVirtualNetworksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        managedVirtualNetwork,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Gets a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedVirtualNetworksGetOptionalParams,
  ): Promise<ManagedVirtualNetworksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, managedVirtualNetworkName, options },
      getOperationSpec,
    );
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: ManagedVirtualNetworksListByFactoryNextOptionalParams,
  ): Promise<ManagedVirtualNetworksListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      listByFactoryNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.managedVirtualNetwork,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName,
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer,
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};

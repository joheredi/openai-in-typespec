// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { OpenAIContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface OpenAIClientOptions extends ClientOptions {}

export { OpenAIContext } from "../rest/index.js";

export function createOpenAI(
  endpoint: string,
  options: OpenAIClientOptions = {}
): OpenAIContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, options);
  return clientContext;
}

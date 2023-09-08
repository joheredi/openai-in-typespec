// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger";
/**
 * Initialize a new instance of `OpenAIClient`
 * @param endpoint - The parameter endpoint
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpoint, options = {}) {
    var _a, _b, _c, _d;
    const baseUrl = (_a = options.baseUrl) !== null && _a !== void 0 ? _a : `${endpoint}`;
    options.apiVersion = (_b = options.apiVersion) !== null && _b !== void 0 ? _b : "2.0.0";
    const userAgentInfo = `azsdk-js--rest/1.0.0-beta.1`;
    const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
        : `${userAgentInfo}`;
    options = Object.assign(Object.assign({}, options), { userAgentOptions: {
            userAgentPrefix,
        }, loggingOptions: {
            logger: (_d = (_c = options.loggingOptions) === null || _c === void 0 ? void 0 : _c.logger) !== null && _d !== void 0 ? _d : logger.info,
        } });
    const client = getClient(baseUrl, options);
    return client;
}
//# sourceMappingURL=openAIClient.js.map
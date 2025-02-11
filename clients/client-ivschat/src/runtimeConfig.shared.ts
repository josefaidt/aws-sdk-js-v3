// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { IvschatClientConfig } from "./IvschatClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IvschatClientConfig) => ({
  apiVersion: "2020-07-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ivschat",
  urlParser: config?.urlParser ?? parseUrl,
});

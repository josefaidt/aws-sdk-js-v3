// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import {
  BatchAssociateScramSecretRequest,
  BatchAssociateScramSecretRequestFilterSensitiveLog,
  BatchAssociateScramSecretResponse,
  BatchAssociateScramSecretResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateScramSecretCommand,
  serializeAws_restJson1BatchAssociateScramSecretCommand,
} from "../protocols/Aws_restJson1";

export interface BatchAssociateScramSecretCommandInput extends BatchAssociateScramSecretRequest {}
export interface BatchAssociateScramSecretCommandOutput extends BatchAssociateScramSecretResponse, __MetadataBearer {}

/**
 * <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, BatchAssociateScramSecretCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, BatchAssociateScramSecretCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new BatchAssociateScramSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateScramSecretCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateScramSecretCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class BatchAssociateScramSecretCommand extends $Command<
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAssociateScramSecretCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchAssociateScramSecretCommandInput, BatchAssociateScramSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "BatchAssociateScramSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateScramSecretRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateScramSecretResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAssociateScramSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAssociateScramSecretCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateScramSecretCommandOutput> {
    return deserializeAws_restJson1BatchAssociateScramSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

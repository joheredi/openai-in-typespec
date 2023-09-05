import "@typespec/http";
import "./chat-meta.tsp";

using TypeSpec.Http;

namespace OpenAI;

@route("/chat/completions")
@post
op createChatCompletion(
  @body body: CreateChatCompletionRequest,
): CreateChatCompletionResponse;

@route("/completions")
@post
op createCompletion(
  @body body: CreateCompletionRequest,
): CreateCompletionResponse;

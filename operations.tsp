import "@typespec/http";
import "./chat-meta.tsp";

using TypeSpec.Http;

namespace OpenAI;

@route("/chat/completions")
@tag("OpenAI")
@post
op createChatCompletion(
  @body body: CreateChatCompletionRequest,
): CreateChatCompletionResponse;

@route("/completions")
@tag("OpenAI")
@post
op createCompletion(
  @body body: CreateCompletionRequest,
): CreateCompletionResponse;

@deprecated("deprecated")
@route("/edits")
@post
@tag("OpenAI")
op createEdit(@body edit: CreateEditRequest): CreateEditResponse;

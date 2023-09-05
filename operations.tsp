import "@typespec/http";
import "./chat-meta.tsp";

using TypeSpec.Http;
using OpenAPI;

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

@route("/images")
interface Images {
  @route("generations")
  @post
  @operationId("createImage")
  @tag("OpenAI")
  @summary("Creates an image given a prompt")
  createImage(@body image: CreateImageRequest): ImagesResponse;

  @route("edits")
  @post
  @operationId("createImageEdit")
  @tag("OpenAI")
  @summary("Creates an edited or extended image given an original image and a prompt.")
  createImageEdit(
    @header contentType: "multipart/form-data",
    @body image: CreateImageEditRequest,
  ): ImagesResponse;

  @route("variations")
  @post
  @operationId("createImageVariation")
  @tag("OpenAI")
  @summary("Creates an edited or extended image given an original image and a prompt.")
  createImageVariation(
    @header contentType: "multipart/form-data",
    @body image: CreateImageVariationRequest,
  ): ImagesResponse;
}

@route("/embeddings")
@tag("OpenAI")
@summary("Creates an embedding vector representing the input text.")
@post
op createEmbedding(
  @body embedding: CreateEmbeddingRequest,
): CreateEmbeddingResponse;

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

@route("/audio")
interface Audio {
  @route("transcriptions")
  @post
  @operationId("createTranscription")
  @tag("OpenAI")
  @summary("Transcribes audio into the input language.")
  createTranscription(
    @header contentType: "multipart/form-data",
    @body audio: CreateTranscriptionRequest,
  ): CreateTranscriptionResponse;

  @route("translations")
  @post
  @operationId("createTranslation")
  @tag("OpenAI")
  @summary("Transcribes audio into the input language.")
  createTranslation(
    @header contentType: "multipart/form-data",
    @body audio: CreateTranslationRequest,
  ): CreateTranslationResponse;
}

@route("/files")
interface Files {
  @tag("OpenAI")
  @get
  @summary("Returns a list of files that belong to the user's organization.")
  @operationId("listFiles")
  listFiles(): ListFilesResponse;

  @tag("OpenAI")
  @post
  @summary("Returns a list of files that belong to the user's organization.")
  @operationId("createFile")
  createFile(
    @header contentType: "multipart/form-data",
    @body file: CreateFileRequest,
  ): OpenAIFile;

  @tag("OpenAI")
  @post
  @summary("Returns information about a specific file.")
  @operationId("retrieveFile")
  @route("/files/{file_id}")
  retrieveFile(
    /**
     * The ID of the file to use for this request
     */
    @path file_id: string,
  ): OpenAIFile;

  @tag("OpenAI")
  @delete
  @summary("Delete a file")
  @operationId("deleteFile")
  @route("/files/{file_id}")
  deleteFile(
    /**
     * The ID of the file to use for this request
     */
    @path file_id: string,
  ): DeleteFileResponse;

  @route("/files/{file_id}/content")
  @tag("OpenAI")
  @get
  @summary("Returns the contents of the specified file")
  @operationId("downloadFile")
  downloadFile(
    /**
     * The ID of the file to use for this request
     */
    @path file_id: string,
  ): string;
}

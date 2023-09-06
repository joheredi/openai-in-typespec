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

@route("/fine_tuning/jobs")
interface FineTuningJobs {
  @post
  createFineTuningJob(@body job: CreateFineTuningJobRequest): FineTuningJob;

  @get
  listPaginatedFineTuningJobs(
    /**
     * Identifier for the last job from the previous pagination request.
     */
    @query after?: string,

    /**
     * Number of fine-tuning jobs to retrieve.
     */
    @query limit?: safeint = 20,
  ): ListPaginatedFineTuningJobsResponse;
}

@route("/fine_tuning/jobs/{fine_tuning_job_id}")
interface FineTuningJobsResource {
  @get retrieveFineTuningJob(@path fine_tuning_job_id: string): FineTuningJob;
  @route("events")
  @get
  listFineTuningEvents(
    /**
     * The ID of the fine-tuning job to get events for.
     */
    @path fine_tuning_job_id: string,

    /**
     * Identifier for the last event from the previous pagination request.
     */
    @query after?: string,

    /**
     * Number of events to retrieve.
     */
    @query limit?: integer = 20,
  ): ListFineTuningJobEventsResponse;

  @route("cancel")
  @post
  cancelFineTuningJob(@path fine_tuning_job_id: string): FineTuningJob;
}

@route("/fine-tunes")
interface FineTunes {
  @post
  @deprecated("deprecated")
  @tag("OpenAI")
  @summary("""
  Creates a job that fine-tunes a specified model from a given dataset.

  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

  [Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
  """)
  @operationId("createFineTune")
  createFineTune(@body fine_tune: CreateFineTuneRequest): FineTune;

  @get
  @deprecated("deprecated")
  @tag("OpenAI")
  @summary("List your organization's fine-tuning jobs")
  @operationId("listFineTunes")
  listFineTunes(): ListFineTunesResponse;
}

@route("/fine-tunes/{fine_tune_id}")
interface FineTunesResource {
  @get
  @deprecated("deprecated")
  @tag("OpenAI")
  @summary("""
  Gets info about the fine-tune job.

  [Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
  """)
  @operationId("retrieveFineTune")
  retrieveFineTune(
    /**
     * The ID of the fine-tune job
     */
    @path fine_tune_id: string,
  ): FineTune;

  @route("events")
  @get
  @deprecated("deprecated")
  @tag("OpenAI")
  @summary("Get fine-grained status updates for a fine-tune job.")
  @operationId("listFineTuneEvents")
  listFineTuneEvents(
    /**
     * The ID of the fine-tune job to get events for.
     */
    @path fine_tune_id: string,

    /**
     * Whether to stream events for the fine-tune job. If set to true, events will be sent as
     * data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available. The stream will terminate with a `data: [DONE]` message when the
     * job is finished (succeeded, cancelled, or failed).
     *
     * If set to false, only events generated so far will be returned.
     */
    @query stream?: boolean = false,
  ): ListFineTuneEventsResponse;

  @route("cancel")
  @post
  @deprecated("deprecated")
  @tag("OpenAI")
  @summary("Immediately cancel a fine-tune job.")
  @operationId("cancelFineTune")
  cancelFineTune(
    /**
     * The ID of the fine-tune job to cancel
     */
    @path fine_tune_id: string,
  ): FineTune;
}

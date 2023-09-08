// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ChatCompletionRequestMessage,
  CreateChatCompletionResponse,
  CreateTranscriptionResponse,
  CreateTranslationResponse,
  FineTuningJob,
  OpenAIFile,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
  CreateCompletionResponse,
  CreateEditResponse,
  ImagesResponse,
  CreateEmbeddingResponse,
  ListFilesResponse,
  DeleteFileResponse,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
  ListModelsResponse,
  Model,
  DeleteModelResponse,
  CreateModerationResponse,
} from "./models/models.js";
import {
  CreateOptions,
  ListOptions,
  RetrieveOptions,
  ListEventsOptions,
  CancelOptions,
  CreateEditOptions,
  CreateVariationOptions,
  DeleteOptions,
  DownloadOptions,
} from "./models/options.js";
import {
  createOpenAI,
  OpenAIClientOptions,
  OpenAIContext,
  create,
  list,
  retrieve,
  listEvents,
  cancel,
  createEdit,
  createVariation,
  deleteOperation,
  download,
} from "./api/index.js";

export { OpenAIClientOptions } from "./api/OpenAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;

  constructor(endpoint: string, options: OpenAIClientOptions = {}) {
    this._client = createOpenAI(endpoint, options);
  }

  create(
    model:
      | string
      | "gpt4"
      | "gpt-4-0314"
      | "gpt-4-0613"
      | "gpt-4-32k"
      | "gpt-4-32k-0314"
      | "gpt-4-32k-0613"
      | "gpt-3.5-turbo"
      | "gpt-3.5-turbo-16k"
      | "gpt-3.5-turbo-0301"
      | "gpt-3.5-turbo-0613"
      | "gpt-3.5-turbo-16k-0613",
    messages: ChatCompletionRequestMessage[],
    options: CreateOptions = { requestOptions: {} }
  ): Promise<CreateChatCompletionResponse> {
    return create(this._client, model, messages, options);
  }

  create(
    file: Uint8Array,
    model: string | "whisper-1",
    options: CreateOptions = { requestOptions: {} }
  ): Promise<CreateTranscriptionResponse> {
    return create(this._client, file, model, options);
  }

  create(
    file: Uint8Array,
    model: string | "whisper-1",
    options: CreateOptions = { requestOptions: {} }
  ): Promise<CreateTranslationResponse> {
    return create(this._client, file, model, options);
  }

  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name of the
   * fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](/docs/guides/fine-tuning)
   */
  create(
    trainingFile: string,
    model: string | "babbage-002" | "davinci-002" | "gpt-3.5-turbo",
    options: CreateOptions = { requestOptions: {} }
  ): Promise<FineTuningJob> {
    return create(this._client, trainingFile, model, options);
  }

  list(
    options: ListOptions = { requestOptions: {} }
  ): Promise<ListPaginatedFineTuningJobsResponse> {
    return list(this._client, options);
  }

  retrieve(
    fineTuningJobId: string,
    options: RetrieveOptions = { requestOptions: {} }
  ): Promise<FineTuningJob> {
    return retrieve(this._client, fineTuningJobId, options);
  }

  listEvents(
    fineTuningJobId: string,
    options: ListEventsOptions = { requestOptions: {} }
  ): Promise<ListFineTuningJobEventsResponse> {
    return listEvents(this._client, fineTuningJobId, options);
  }

  cancel(
    fineTuningJobId: string,
    options: CancelOptions = { requestOptions: {} }
  ): Promise<FineTuningJob> {
    return cancel(this._client, fineTuningJobId, options);
  }

  create(
    model:
      | string
      | "babbage-002"
      | "davinci-002"
      | "text-davinci-003"
      | "text-davinci-002"
      | "text-davinci-001"
      | "code-davinci-002"
      | "text-curie-001"
      | "text-babbage-001"
      | "text-ada-001",
    prompt: string | string[] | number[] | number[],
    bestOf: number | null,
    options: CreateOptions = { requestOptions: {} }
  ): Promise<CreateCompletionResponse> {
    return create(this._client, model, prompt, bestOf, options);
  }

  create(
    model: string | "text-davinci-edit-001" | "code-davinci-edit-001",
    instruction: string,
    options: CreateOptions = { requestOptions: {} }
  ): Promise<CreateEditResponse> {
    return create(this._client, model, instruction, options);
  }

  create(
    prompt: string,
    options: CreateOptions = { requestOptions: {} }
  ): Promise<ImagesResponse> {
    return create(this._client, prompt, options);
  }

  createEdit(
    prompt: string,
    image: Uint8Array,
    options: CreateEditOptions = { requestOptions: {} }
  ): Promise<ImagesResponse> {
    return createEdit(this._client, prompt, image, options);
  }

  createVariation(
    image: Uint8Array,
    options: CreateVariationOptions = { requestOptions: {} }
  ): Promise<ImagesResponse> {
    return createVariation(this._client, image, options);
  }

  create(
    model: string | "text-embedding-ada-002",
    input: string | string[] | number[] | number[],
    options: CreateOptions = { requestOptions: {} }
  ): Promise<CreateEmbeddingResponse> {
    return create(this._client, model, input, options);
  }

  list(
    options: ListOptions = { requestOptions: {} }
  ): Promise<ListFilesResponse> {
    return list(this._client, options);
  }

  create(
    file: Uint8Array,
    purpose: string,
    options: CreateOptions = { requestOptions: {} }
  ): Promise<OpenAIFile> {
    return create(this._client, file, purpose, options);
  }

  retrieve(
    fileId: string,
    options: RetrieveOptions = { requestOptions: {} }
  ): Promise<OpenAIFile> {
    return retrieve(this._client, fileId, options);
  }

  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  deleteOperation(
    fileId: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<DeleteFileResponse> {
    return deleteOperation(this._client, fileId, options);
  }

  download(
    fileId: string,
    options: DownloadOptions = { requestOptions: {} }
  ): Promise<string> {
    return download(this._client, fileId, options);
  }

  create(
    trainingFile: string,
    suffix: string | null,
    options: CreateOptions = { requestOptions: {} }
  ): Promise<FineTune> {
    return create(this._client, trainingFile, suffix, options);
  }

  list(
    options: ListOptions = { requestOptions: {} }
  ): Promise<ListFineTunesResponse> {
    return list(this._client, options);
  }

  retrieve(
    fineTuneId: string,
    options: RetrieveOptions = { requestOptions: {} }
  ): Promise<FineTune> {
    return retrieve(this._client, fineTuneId, options);
  }

  listEvents(
    fineTuneId: string,
    options: ListEventsOptions = { requestOptions: {} }
  ): Promise<ListFineTuneEventsResponse> {
    return listEvents(this._client, fineTuneId, options);
  }

  cancel(
    fineTuneId: string,
    options: CancelOptions = { requestOptions: {} }
  ): Promise<FineTune> {
    return cancel(this._client, fineTuneId, options);
  }

  list(
    options: ListOptions = { requestOptions: {} }
  ): Promise<ListModelsResponse> {
    return list(this._client, options);
  }

  retrieve(
    model: string,
    options: RetrieveOptions = { requestOptions: {} }
  ): Promise<Model> {
    return retrieve(this._client, model, options);
  }

  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  deleteOperation(
    model: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<DeleteModelResponse> {
    return deleteOperation(this._client, model, options);
  }

  create(
    input: string | string[],
    options: CreateOptions = { requestOptions: {} }
  ): Promise<CreateModerationResponse> {
    return create(this._client, input, options);
  }
}

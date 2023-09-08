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
} from "../models/models.js";
import {
  CompletionsCreate200Response,
  CompletionsCreateDefaultResponse,
  EditsCreate200Response,
  EditsCreateDefaultResponse,
  EmbeddingsCreate200Response,
  EmbeddingsCreateDefaultResponse,
  FilesCreate200Response,
  FilesCreateDefaultResponse,
  FilesDeleteOperation200Response,
  FilesDeleteOperationDefaultResponse,
  FilesDownload200Response,
  FilesDownloadDefaultResponse,
  FilesList200Response,
  FilesListDefaultResponse,
  FilesRetrieve200Response,
  FilesRetrieveDefaultResponse,
  FineTunesCancel200Response,
  FineTunesCancelDefaultResponse,
  FineTunesCreate200Response,
  FineTunesCreateDefaultResponse,
  FineTunesList200Response,
  FineTunesListDefaultResponse,
  FineTunesListEvents200Response,
  FineTunesListEventsDefaultResponse,
  FineTunesRetrieve200Response,
  FineTunesRetrieveDefaultResponse,
  ImagesCreate200Response,
  ImagesCreateDefaultResponse,
  ImagesCreateEdit200Response,
  ImagesCreateEditDefaultResponse,
  ImagesCreateVariation200Response,
  ImagesCreateVariationDefaultResponse,
  isUnexpected,
  JobsCancel200Response,
  JobsCancelDefaultResponse,
  JobsCreate200Response,
  JobsCreateDefaultResponse,
  JobsList200Response,
  JobsListDefaultResponse,
  JobsListEvents200Response,
  JobsListEventsDefaultResponse,
  JobsRetrieve200Response,
  JobsRetrieveDefaultResponse,
  ModelsDeleteOperation200Response,
  ModelsDeleteOperationDefaultResponse,
  ModelsList200Response,
  ModelsListDefaultResponse,
  ModelsRetrieve200Response,
  ModelsRetrieveDefaultResponse,
  ModerationsCreate200Response,
  ModerationsCreateDefaultResponse,
  OpenAIContext as Client,
  TranscriptionsCreate200Response,
  TranscriptionsCreateDefaultResponse,
  TranslationsCreate200Response,
  TranslationsCreateDefaultResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
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
} from "../models/options.js";

export function _createSend(
  context: Client,
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
): StreamableMethod<
  CompletionsCreate200Response | CompletionsCreateDefaultResponse
> {
  return context
    .path("/chat/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: model,
        messages: messages,
        functions: options?.functions,
        function_call: options?.functionCall,
        temperature: options?.temperature,
        top_p: options?.topP,
        n: options?.n,
        max_tokens: options?.maxTokens,
        stop: options?.stop,
        presence_penalty: options?.presencePenalty,
        frequency_penalty: options?.frequencyPenalty,
        logit_bias: options?.logitBias,
        user: options?.user,
        stream: options?.stream,
      },
    });
}

export async function _createDeserialize(
  result: CompletionsCreate200Response | CompletionsCreateDefaultResponse
): Promise<CreateChatCompletionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      index: p["index"],
      message: {
        role: p.message["role"],
        content: p.message["content"],
        functionCall: !p.message.function_call
          ? undefined
          : {
              name: p.message.function_call?.["name"],
              arguments: p.message.function_call?.["arguments"],
            },
      },
      finishReason: p["finish_reason"],
    })),
    usage: !result.body.usage
      ? undefined
      : {
          promptTokens: result.body.usage?.["prompt_tokens"],
          completionTokens: result.body.usage?.["completion_tokens"],
          totalTokens: result.body.usage?.["total_tokens"],
        },
  };
}

export async function create(
  context: Client,
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
  const result = await _createSend(context, model, messages, options);
  return _createDeserialize(result);
}

export function _createSend(
  context: Client,
  file: Uint8Array,
  model: string | "whisper-1",
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<
  TranscriptionsCreate200Response | TranscriptionsCreateDefaultResponse
> {
  return context
    .path("/audio/transcriptions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: file,
        model: model,
        prompt: options?.prompt,
        response_format: options?.responseFormat,
        temperature: options?.temperature,
        language: options?.language,
      },
    });
}

export async function _createDeserialize(
  result: TranscriptionsCreate200Response | TranscriptionsCreateDefaultResponse
): Promise<CreateTranscriptionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function create(
  context: Client,
  file: Uint8Array,
  model: string | "whisper-1",
  options: CreateOptions = { requestOptions: {} }
): Promise<CreateTranscriptionResponse> {
  const result = await _createSend(context, file, model, options);
  return _createDeserialize(result);
}

export function _createSend(
  context: Client,
  file: Uint8Array,
  model: string | "whisper-1",
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<
  TranslationsCreate200Response | TranslationsCreateDefaultResponse
> {
  return context
    .path("/audio/translations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: file,
        model: model,
        prompt: options?.prompt,
        response_format: options?.responseFormat,
        temperature: options?.temperature,
      },
    });
}

export async function _createDeserialize(
  result: TranslationsCreate200Response | TranslationsCreateDefaultResponse
): Promise<CreateTranslationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function create(
  context: Client,
  file: Uint8Array,
  model: string | "whisper-1",
  options: CreateOptions = { requestOptions: {} }
): Promise<CreateTranslationResponse> {
  const result = await _createSend(context, file, model, options);
  return _createDeserialize(result);
}

export function _createSend(
  context: Client,
  trainingFile: string,
  model: string | "babbage-002" | "davinci-002" | "gpt-3.5-turbo",
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<JobsCreate200Response | JobsCreateDefaultResponse> {
  return context
    .path("/fine_tuning/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        training_file: trainingFile,
        validation_file: options?.validationFile,
        model: model,
        hyperparameters: { n_epochs: options?.hyperparameters?.["nEpochs"] },
        suffix: options?.suffix,
      },
    });
}

export async function _createDeserialize(
  result: JobsCreate200Response | JobsCreateDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt: new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"],
    hyperparameters: { nEpochs: result.body.hyperparameters["n_epochs"] },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    trainedTokens: result.body["trained_tokens"],
  };
}

/**
 * Creates a job that fine-tunes a specified model from a given dataset.
 *
 * Response includes details of the enqueued job including job status and the name of the
 * fine-tuned models once complete.
 *
 * [Learn more about fine-tuning](/docs/guides/fine-tuning)
 */
export async function create(
  context: Client,
  trainingFile: string,
  model: string | "babbage-002" | "davinci-002" | "gpt-3.5-turbo",
  options: CreateOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _createSend(context, trainingFile, model, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): StreamableMethod<JobsList200Response | JobsListDefaultResponse> {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listDeserialize(
  result: JobsList200Response | JobsListDefaultResponse
): Promise<ListPaginatedFineTuningJobsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      finishedAt: new Date(p["finished_at"]),
      model: p["model"],
      fineTunedModel: p["fine_tuned_model"],
      organizationId: p["organization_id"],
      status: p["status"],
      hyperparameters: { nEpochs: p.hyperparameters["n_epochs"] },
      trainingFile: p["training_file"],
      validationFile: p["validation_file"],
      resultFiles: (p["result_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      })),
      trainedTokens: p["trained_tokens"],
    })),
    hasMore: result.body["has_more"],
  };
}

export async function list(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): Promise<ListPaginatedFineTuningJobsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuningJobId: string,
  options: RetrieveOptions = { requestOptions: {} }
): StreamableMethod<JobsRetrieve200Response | JobsRetrieveDefaultResponse> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: JobsRetrieve200Response | JobsRetrieveDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt: new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"],
    hyperparameters: { nEpochs: result.body.hyperparameters["n_epochs"] },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    trainedTokens: result.body["trained_tokens"],
  };
}

export async function retrieve(
  context: Client,
  fineTuningJobId: string,
  options: RetrieveOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _retrieveSend(context, fineTuningJobId, options);
  return _retrieveDeserialize(result);
}

export function _listEventsSend(
  context: Client,
  fineTuningJobId: string,
  options: ListEventsOptions = { requestOptions: {} }
): StreamableMethod<JobsListEvents200Response | JobsListEventsDefaultResponse> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listEventsDeserialize(
  result: JobsListEvents200Response | JobsListEventsDefaultResponse
): Promise<ListFineTuningJobEventsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function listEvents(
  context: Client,
  fineTuningJobId: string,
  options: ListEventsOptions = { requestOptions: {} }
): Promise<ListFineTuningJobEventsResponse> {
  const result = await _listEventsSend(context, fineTuningJobId, options);
  return _listEventsDeserialize(result);
}

export function _cancelSend(
  context: Client,
  fineTuningJobId: string,
  options: CancelOptions = { requestOptions: {} }
): StreamableMethod<JobsCancel200Response | JobsCancelDefaultResponse> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: JobsCancel200Response | JobsCancelDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt: new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"],
    hyperparameters: { nEpochs: result.body.hyperparameters["n_epochs"] },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    trainedTokens: result.body["trained_tokens"],
  };
}

export async function cancel(
  context: Client,
  fineTuningJobId: string,
  options: CancelOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _cancelSend(context, fineTuningJobId, options);
  return _cancelDeserialize(result);
}

export function _createSend(
  context: Client,
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
): StreamableMethod<
  CompletionsCreate200Response | CompletionsCreateDefaultResponse
> {
  return context
    .path("/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: model,
        prompt: prompt,
        suffix: options?.suffix,
        temperature: options?.temperature,
        top_p: options?.topP,
        n: options?.n,
        max_tokens: options?.maxTokens,
        stop: options?.stop,
        presence_penalty: options?.presencePenalty,
        frequency_penalty: options?.frequencyPenalty,
        logit_bias: options?.logitBias,
        user: options?.user,
        stream: options?.stream,
        logprobs: options?.logprobs,
        echo: options?.echo,
        best_of: bestOf,
      },
    });
}

export async function _createDeserialize(
  result: CompletionsCreate200Response | CompletionsCreateDefaultResponse
): Promise<CreateCompletionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      index: p["index"],
      text: p["text"],
      logprobs: !p.logprobs
        ? undefined
        : {
            tokens: p.logprobs?.["tokens"],
            tokenLogprobs: p.logprobs?.["token_logprobs"],
            topLogprobs: p.logprobs?.["top_logprobs"],
            textOffset: p.logprobs?.["text_offset"],
          },
      finishReason: p["finish_reason"],
    })),
    usage: !result.body.usage
      ? undefined
      : {
          promptTokens: result.body.usage?.["prompt_tokens"],
          completionTokens: result.body.usage?.["completion_tokens"],
          totalTokens: result.body.usage?.["total_tokens"],
        },
  };
}

export async function create(
  context: Client,
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
  const result = await _createSend(context, model, prompt, bestOf, options);
  return _createDeserialize(result);
}

export function _createSend(
  context: Client,
  model: string | "text-davinci-edit-001" | "code-davinci-edit-001",
  instruction: string,
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<EditsCreate200Response | EditsCreateDefaultResponse> {
  return context
    .path("/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: model,
        input: options?.input,
        instruction: instruction,
        n: options?.n,
        temperature: options?.temperature,
        top_p: options?.topP,
      },
    });
}

export async function _createDeserialize(
  result: EditsCreate200Response | EditsCreateDefaultResponse
): Promise<CreateEditResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    created: new Date(result.body["created"]),
    choices: (result.body["choices"] ?? []).map((p) => ({
      index: p["index"],
      text: p["text"],
      logprobs: !p.logprobs
        ? undefined
        : {
            tokens: p.logprobs?.["tokens"],
            tokenLogprobs: p.logprobs?.["token_logprobs"],
            topLogprobs: p.logprobs?.["top_logprobs"],
            textOffset: p.logprobs?.["text_offset"],
          },
      finishReason: p["finish_reason"],
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      completionTokens: result.body.usage["completion_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export async function create(
  context: Client,
  model: string | "text-davinci-edit-001" | "code-davinci-edit-001",
  instruction: string,
  options: CreateOptions = { requestOptions: {} }
): Promise<CreateEditResponse> {
  const result = await _createSend(context, model, instruction, options);
  return _createDeserialize(result);
}

export function _createSend(
  context: Client,
  prompt: string,
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<ImagesCreate200Response | ImagesCreateDefaultResponse> {
  return context
    .path("/images/generations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prompt: prompt,
        n: options?.n,
        size: options?.size,
        response_format: options?.responseFormat,
        user: options?.user,
      },
    });
}

export async function _createDeserialize(
  result: ImagesCreate200Response | ImagesCreateDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function create(
  context: Client,
  prompt: string,
  options: CreateOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createSend(context, prompt, options);
  return _createDeserialize(result);
}

export function _createEditSend(
  context: Client,
  prompt: string,
  image: Uint8Array,
  options: CreateEditOptions = { requestOptions: {} }
): StreamableMethod<
  ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse
> {
  return context
    .path("/images/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        prompt: prompt,
        image: image,
        mask: options?.mask,
        n: options?.n,
        size: options?.size,
        response_format: options?.responseFormat,
        user: options?.user,
      },
    });
}

export async function _createEditDeserialize(
  result: ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function createEdit(
  context: Client,
  prompt: string,
  image: Uint8Array,
  options: CreateEditOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createEditSend(context, prompt, image, options);
  return _createEditDeserialize(result);
}

export function _createVariationSend(
  context: Client,
  image: Uint8Array,
  options: CreateVariationOptions = { requestOptions: {} }
): StreamableMethod<
  ImagesCreateVariation200Response | ImagesCreateVariationDefaultResponse
> {
  return context
    .path("/images/variations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        image: image,
        n: options?.n,
        size: options?.size,
        response_format: options?.responseFormat,
        user: options?.user,
      },
    });
}

export async function _createVariationDeserialize(
  result:
    | ImagesCreateVariation200Response
    | ImagesCreateVariationDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function createVariation(
  context: Client,
  image: Uint8Array,
  options: CreateVariationOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createVariationSend(context, image, options);
  return _createVariationDeserialize(result);
}

export function _createSend(
  context: Client,
  model: string | "text-embedding-ada-002",
  input: string | string[] | number[] | number[],
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<
  EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse
> {
  return context
    .path("/embeddings")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { model: model, input: input, user: options?.user },
    });
}

export async function _createDeserialize(
  result: EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse
): Promise<CreateEmbeddingResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    model: result.body["model"],
    data: (result.body["data"] ?? []).map((p) => ({
      index: p["index"],
      object: p["object"],
      embedding: p["embedding"],
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export async function create(
  context: Client,
  model: string | "text-embedding-ada-002",
  input: string | string[] | number[] | number[],
  options: CreateOptions = { requestOptions: {} }
): Promise<CreateEmbeddingResponse> {
  const result = await _createSend(context, model, input, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): StreamableMethod<FilesList200Response | FilesListDefaultResponse> {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: FilesList200Response | FilesListDefaultResponse
): Promise<ListFilesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
  };
}

export async function list(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): Promise<ListFilesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _createSend(
  context: Client,
  file: Uint8Array,
  purpose: string,
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<FilesCreate200Response | FilesCreateDefaultResponse> {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: { file: file, purpose: purpose },
    });
}

export async function _createDeserialize(
  result: FilesCreate200Response | FilesCreateDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"],
    statusDetails: result.body["status_details"],
  };
}

export async function create(
  context: Client,
  file: Uint8Array,
  purpose: string,
  options: CreateOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _createSend(context, file, purpose, options);
  return _createDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fileId: string,
  options: RetrieveOptions = { requestOptions: {} }
): StreamableMethod<FilesRetrieve200Response | FilesRetrieveDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: FilesRetrieve200Response | FilesRetrieveDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"],
    statusDetails: result.body["status_details"],
  };
}

export async function retrieve(
  context: Client,
  fileId: string,
  options: RetrieveOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _retrieveSend(context, fileId, options);
  return _retrieveDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  fileId: string,
  options: DeleteOptions = { requestOptions: {} }
): StreamableMethod<
  FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
> {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result: FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
): Promise<DeleteFileResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function deleteOperation(
  context: Client,
  fileId: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<DeleteFileResponse> {
  const result = await _deleteOperationSend(context, fileId, options);
  return _deleteOperationDeserialize(result);
}

export function _downloadSend(
  context: Client,
  fileId: string,
  options: DownloadOptions = { requestOptions: {} }
): StreamableMethod<FilesDownload200Response | FilesDownloadDefaultResponse> {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadDeserialize(
  result: FilesDownload200Response | FilesDownloadDefaultResponse
): Promise<string> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

export async function download(
  context: Client,
  fileId: string,
  options: DownloadOptions = { requestOptions: {} }
): Promise<string> {
  const result = await _downloadSend(context, fileId, options);
  return _downloadDeserialize(result);
}

export function _createSend(
  context: Client,
  trainingFile: string,
  suffix: string | null,
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesCreate200Response | FineTunesCreateDefaultResponse
> {
  return context
    .path("/fine-tunes")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        training_file: trainingFile,
        validation_file: options?.validationFile,
        model: options?.model,
        n_epochs: options?.nEpochs,
        batch_size: options?.batchSize,
        learning_rate_multiplier: options?.learningRateMultiplier,
        prompt_loss_rate: options?.promptLossRate,
        compute_classification_metrics: options?.computeClassificationMetrics,
        classification_n_classes: options?.classificationNClasses,
        classification_positive_class: options?.classificationPositiveClass,
        classification_betas: options?.classificationBetas,
        suffix: suffix,
      },
    });
}

export async function _createDeserialize(
  result: FineTunesCreate200Response | FineTunesCreateDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"],
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function create(
  context: Client,
  trainingFile: string,
  suffix: string | null,
  options: CreateOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _createSend(context, trainingFile, suffix, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): StreamableMethod<FineTunesList200Response | FineTunesListDefaultResponse> {
  return context
    .path("/fine-tunes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: FineTunesList200Response | FineTunesListDefaultResponse
): Promise<ListFineTunesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      updatedAt: new Date(p["updated_at"]),
      model: p["model"],
      fineTunedModel: p["fine_tuned_model"],
      organizationId: p["organization_id"],
      status: p["status"],
      hyperparams: {
        nEpochs: p.hyperparams["n_epochs"],
        batchSize: p.hyperparams["batch_size"],
        promptLossWeight: p.hyperparams["prompt_loss_weight"],
        learningRateMultiplier: p.hyperparams["learning_rate_multiplier"],
        computeClassificationMetrics:
          p.hyperparams["compute_classification_metrics"],
        classificationPositiveClass:
          p.hyperparams["classification_positive_class"],
        classificationNClasses: p.hyperparams["classification_n_classes"],
      },
      trainingFiles: (p["training_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      })),
      validationFiles: (p["validation_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      })),
      resultFiles: (p["result_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      })),
      events: (p["events"] ?? []).map((p) => ({
        object: p["object"],
        createdAt: new Date(p["created_at"]),
        level: p["level"],
        message: p["message"],
      })),
    })),
  };
}

export async function list(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): Promise<ListFineTunesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuneId: string,
  options: RetrieveOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}", fineTuneId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"],
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function retrieve(
  context: Client,
  fineTuneId: string,
  options: RetrieveOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _retrieveSend(context, fineTuneId, options);
  return _retrieveDeserialize(result);
}

export function _listEventsSend(
  context: Client,
  fineTuneId: string,
  options: ListEventsOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesListEvents200Response | FineTunesListEventsDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}/events", fineTuneId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { stream: options?.stream },
    });
}

export async function _listEventsDeserialize(
  result: FineTunesListEvents200Response | FineTunesListEventsDefaultResponse
): Promise<ListFineTuneEventsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function listEvents(
  context: Client,
  fineTuneId: string,
  options: ListEventsOptions = { requestOptions: {} }
): Promise<ListFineTuneEventsResponse> {
  const result = await _listEventsSend(context, fineTuneId, options);
  return _listEventsDeserialize(result);
}

export function _cancelSend(
  context: Client,
  fineTuneId: string,
  options: CancelOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesCancel200Response | FineTunesCancelDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}/cancel", fineTuneId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: FineTunesCancel200Response | FineTunesCancelDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"],
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"],
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function cancel(
  context: Client,
  fineTuneId: string,
  options: CancelOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _cancelSend(context, fineTuneId, options);
  return _cancelDeserialize(result);
}

export function _listSend(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): StreamableMethod<ModelsList200Response | ModelsListDefaultResponse> {
  return context
    .path("/models")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: ModelsList200Response | ModelsListDefaultResponse
): Promise<ListModelsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      created: new Date(p["created"]),
      ownedBy: p["owned_by"],
    })),
  };
}

export async function list(
  context: Client,
  options: ListOptions = { requestOptions: {} }
): Promise<ListModelsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  model: string,
  options: RetrieveOptions = { requestOptions: {} }
): StreamableMethod<ModelsRetrieve200Response | ModelsRetrieveDefaultResponse> {
  return context
    .path("/models/{model}", model)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: ModelsRetrieve200Response | ModelsRetrieveDefaultResponse
): Promise<Model> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    ownedBy: result.body["owned_by"],
  };
}

export async function retrieve(
  context: Client,
  model: string,
  options: RetrieveOptions = { requestOptions: {} }
): Promise<Model> {
  const result = await _retrieveSend(context, model, options);
  return _retrieveDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  model: string,
  options: DeleteOptions = { requestOptions: {} }
): StreamableMethod<
  ModelsDeleteOperation200Response | ModelsDeleteOperationDefaultResponse
> {
  return context
    .path("/models/{model}", model)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result:
    | ModelsDeleteOperation200Response
    | ModelsDeleteOperationDefaultResponse
): Promise<DeleteModelResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function deleteOperation(
  context: Client,
  model: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<DeleteModelResponse> {
  const result = await _deleteOperationSend(context, model, options);
  return _deleteOperationDeserialize(result);
}

export function _createSend(
  context: Client,
  input: string | string[],
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<
  ModerationsCreate200Response | ModerationsCreateDefaultResponse
> {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { input: input, model: options?.model },
    });
}

export async function _createDeserialize(
  result: ModerationsCreate200Response | ModerationsCreateDefaultResponse
): Promise<CreateModerationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    model: result.body["model"],
    results: (result.body["results"] ?? []).map((p) => ({
      flagged: p["flagged"],
      categories: {
        hate: p.categories["hate"],
        "hate/threatening": p.categories["hate/threatening"],
        harassment: p.categories["harassment"],
        "harassment/threatening": p.categories["harassment/threatening"],
        selfHarm: p.categories["self-harm"],
        "selfHarm/intent": p.categories["self-harm/intent"],
        "selfHarm/instructive": p.categories["self-harm/instructive"],
        sexual: p.categories["sexual"],
        "sexual/minors": p.categories["sexual/minors"],
        violence: p.categories["violence"],
        "violence/graphic": p.categories["violence/graphic"],
      },
      categoryScores: {
        hate: p.category_scores["hate"],
        "hate/threatening": p.category_scores["hate/threatening"],
        harassment: p.category_scores["harassment"],
        "harassment/threatening": p.category_scores["harassment/threatening"],
        selfHarm: p.category_scores["self-harm"],
        "selfHarm/intent": p.category_scores["self-harm/intent"],
        "selfHarm/instructive": p.category_scores["self-harm/instructive"],
        sexual: p.category_scores["sexual"],
        "sexual/minors": p.category_scores["sexual/minors"],
        violence: p.category_scores["violence"],
        "violence/graphic": p.category_scores["violence/graphic"],
      },
    })),
  };
}

export async function create(
  context: Client,
  input: string | string[],
  options: CreateOptions = { requestOptions: {} }
): Promise<CreateModerationResponse> {
  const result = await _createSend(context, input, options);
  return _createDeserialize(result);
}

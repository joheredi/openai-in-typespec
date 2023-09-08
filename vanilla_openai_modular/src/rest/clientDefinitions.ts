// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CompletionsCreateParameters,
  TranscriptionsCreateParameters,
  TranslationsCreateParameters,
  JobsCreateParameters,
  JobsListParameters,
  JobsRetrieveParameters,
  JobsListEventsParameters,
  JobsCancelParameters,
  EditsCreateParameters,
  ImagesCreateParameters,
  ImagesCreateEditParameters,
  ImagesCreateVariationParameters,
  EmbeddingsCreateParameters,
  FilesListParameters,
  FilesCreateParameters,
  FilesRetrieveParameters,
  FilesDeleteParameters,
  FilesDownloadParameters,
  FineTunesCreateParameters,
  FineTunesListParameters,
  FineTunesRetrieveParameters,
  FineTunesListEventsParameters,
  FineTunesCancelParameters,
  ModelsListParameters,
  ModelsRetrieveParameters,
  ModelsDeleteParameters,
  ModerationsCreateParameters,
} from "./parameters.js";
import {
  CompletionsCreate200Response,
  CompletionsCreateDefaultResponse,
  TranscriptionsCreate200Response,
  TranscriptionsCreateDefaultResponse,
  TranslationsCreate200Response,
  TranslationsCreateDefaultResponse,
  JobsCreate200Response,
  JobsCreateDefaultResponse,
  JobsList200Response,
  JobsListDefaultResponse,
  JobsRetrieve200Response,
  JobsRetrieveDefaultResponse,
  JobsListEvents200Response,
  JobsListEventsDefaultResponse,
  JobsCancel200Response,
  JobsCancelDefaultResponse,
  EditsCreate200Response,
  EditsCreateDefaultResponse,
  ImagesCreate200Response,
  ImagesCreateDefaultResponse,
  ImagesCreateEdit200Response,
  ImagesCreateEditDefaultResponse,
  ImagesCreateVariation200Response,
  ImagesCreateVariationDefaultResponse,
  EmbeddingsCreate200Response,
  EmbeddingsCreateDefaultResponse,
  FilesList200Response,
  FilesListDefaultResponse,
  FilesCreate200Response,
  FilesCreateDefaultResponse,
  FilesRetrieve200Response,
  FilesRetrieveDefaultResponse,
  FilesDeleteOperation200Response,
  FilesDeleteOperationDefaultResponse,
  FilesDownload200Response,
  FilesDownloadDefaultResponse,
  FineTunesCreate200Response,
  FineTunesCreateDefaultResponse,
  FineTunesList200Response,
  FineTunesListDefaultResponse,
  FineTunesRetrieve200Response,
  FineTunesRetrieveDefaultResponse,
  FineTunesListEvents200Response,
  FineTunesListEventsDefaultResponse,
  FineTunesCancel200Response,
  FineTunesCancelDefaultResponse,
  ModelsList200Response,
  ModelsListDefaultResponse,
  ModelsRetrieve200Response,
  ModelsRetrieveDefaultResponse,
  ModelsDeleteOperation200Response,
  ModelsDeleteOperationDefaultResponse,
  ModerationsCreate200Response,
  ModerationsCreateDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CompletionsCreate {
  post(
    options: CompletionsCreateParameters
  ): StreamableMethod<
    CompletionsCreate200Response | CompletionsCreateDefaultResponse
  >;
}

export interface TranscriptionsCreate {
  post(
    options: TranscriptionsCreateParameters
  ): StreamableMethod<
    TranscriptionsCreate200Response | TranscriptionsCreateDefaultResponse
  >;
}

export interface TranslationsCreate {
  post(
    options: TranslationsCreateParameters
  ): StreamableMethod<
    TranslationsCreate200Response | TranslationsCreateDefaultResponse
  >;
}

export interface JobsCreate {
  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name of the
   * fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](/docs/guides/fine-tuning)
   */
  post(
    options: JobsCreateParameters
  ): StreamableMethod<JobsCreate200Response | JobsCreateDefaultResponse>;
  get(
    options?: JobsListParameters
  ): StreamableMethod<JobsList200Response | JobsListDefaultResponse>;
}

export interface JobsRetrieve {
  get(
    options?: JobsRetrieveParameters
  ): StreamableMethod<JobsRetrieve200Response | JobsRetrieveDefaultResponse>;
}

export interface JobsListEvents {
  get(
    options?: JobsListEventsParameters
  ): StreamableMethod<
    JobsListEvents200Response | JobsListEventsDefaultResponse
  >;
}

export interface JobsCancel {
  post(
    options?: JobsCancelParameters
  ): StreamableMethod<JobsCancel200Response | JobsCancelDefaultResponse>;
}

export interface CompletionsCreate {
  post(
    options: CompletionsCreateParameters
  ): StreamableMethod<
    CompletionsCreate200Response | CompletionsCreateDefaultResponse
  >;
}

export interface EditsCreate {
  post(
    options: EditsCreateParameters
  ): StreamableMethod<EditsCreate200Response | EditsCreateDefaultResponse>;
}

export interface ImagesCreate {
  post(
    options: ImagesCreateParameters
  ): StreamableMethod<ImagesCreate200Response | ImagesCreateDefaultResponse>;
}

export interface ImagesCreateEdit {
  post(
    options: ImagesCreateEditParameters
  ): StreamableMethod<
    ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse
  >;
}

export interface ImagesCreateVariation {
  post(
    options: ImagesCreateVariationParameters
  ): StreamableMethod<
    ImagesCreateVariation200Response | ImagesCreateVariationDefaultResponse
  >;
}

export interface EmbeddingsCreate {
  post(
    options: EmbeddingsCreateParameters
  ): StreamableMethod<
    EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse
  >;
}

export interface FilesList {
  get(
    options?: FilesListParameters
  ): StreamableMethod<FilesList200Response | FilesListDefaultResponse>;
  post(
    options: FilesCreateParameters
  ): StreamableMethod<FilesCreate200Response | FilesCreateDefaultResponse>;
}

export interface FilesRetrieve {
  post(
    options?: FilesRetrieveParameters
  ): StreamableMethod<FilesRetrieve200Response | FilesRetrieveDefaultResponse>;
  delete(
    options?: FilesDeleteParameters
  ): StreamableMethod<
    FilesDeleteOperation200Response | FilesDeleteOperationDefaultResponse
  >;
}

export interface FilesDownload {
  get(
    options?: FilesDownloadParameters
  ): StreamableMethod<FilesDownload200Response | FilesDownloadDefaultResponse>;
}

export interface FineTunesCreate {
  post(
    options: FineTunesCreateParameters
  ): StreamableMethod<
    FineTunesCreate200Response | FineTunesCreateDefaultResponse
  >;
  get(
    options?: FineTunesListParameters
  ): StreamableMethod<FineTunesList200Response | FineTunesListDefaultResponse>;
}

export interface FineTunesRetrieve {
  get(
    options?: FineTunesRetrieveParameters
  ): StreamableMethod<
    FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse
  >;
}

export interface FineTunesListEvents {
  get(
    options?: FineTunesListEventsParameters
  ): StreamableMethod<
    FineTunesListEvents200Response | FineTunesListEventsDefaultResponse
  >;
}

export interface FineTunesCancel {
  post(
    options?: FineTunesCancelParameters
  ): StreamableMethod<
    FineTunesCancel200Response | FineTunesCancelDefaultResponse
  >;
}

export interface ModelsList {
  get(
    options?: ModelsListParameters
  ): StreamableMethod<ModelsList200Response | ModelsListDefaultResponse>;
}

export interface ModelsRetrieve {
  get(
    options?: ModelsRetrieveParameters
  ): StreamableMethod<
    ModelsRetrieve200Response | ModelsRetrieveDefaultResponse
  >;
  delete(
    options?: ModelsDeleteParameters
  ): StreamableMethod<
    ModelsDeleteOperation200Response | ModelsDeleteOperationDefaultResponse
  >;
}

export interface ModerationsCreate {
  post(
    options: ModerationsCreateParameters
  ): StreamableMethod<
    ModerationsCreate200Response | ModerationsCreateDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/chat/completions' has methods for the following verbs: post */
  (path: "/chat/completions"): CompletionsCreate;
  /** Resource for '/audio/transcriptions' has methods for the following verbs: post */
  (path: "/audio/transcriptions"): TranscriptionsCreate;
  /** Resource for '/audio/translations' has methods for the following verbs: post */
  (path: "/audio/translations"): TranslationsCreate;
  /** Resource for '/fine_tuning/jobs' has methods for the following verbs: post, get */
  (path: "/fine_tuning/jobs"): JobsCreate;
  /** Resource for '/fine_tuning/jobs/\{fine_tuning_job_id\}' has methods for the following verbs: get */
  (
    path: "/fine_tuning/jobs/{fine_tuning_job_id}",
    fineTuningJobId: string
  ): JobsRetrieve;
  /** Resource for '/fine_tuning/jobs/\{fine_tuning_job_id\}/events' has methods for the following verbs: get */
  (
    path: "/fine_tuning/jobs/{fine_tuning_job_id}/events",
    fineTuningJobId: string
  ): JobsListEvents;
  /** Resource for '/fine_tuning/jobs/\{fine_tuning_job_id\}/cancel' has methods for the following verbs: post */
  (
    path: "/fine_tuning/jobs/{fine_tuning_job_id}/cancel",
    fineTuningJobId: string
  ): JobsCancel;
  /** Resource for '/completions' has methods for the following verbs: post */
  (path: "/completions"): CompletionsCreate;
  /** Resource for '/edits' has methods for the following verbs: post */
  (path: "/edits"): EditsCreate;
  /** Resource for '/images/generations' has methods for the following verbs: post */
  (path: "/images/generations"): ImagesCreate;
  /** Resource for '/images/edits' has methods for the following verbs: post */
  (path: "/images/edits"): ImagesCreateEdit;
  /** Resource for '/images/variations' has methods for the following verbs: post */
  (path: "/images/variations"): ImagesCreateVariation;
  /** Resource for '/embeddings' has methods for the following verbs: post */
  (path: "/embeddings"): EmbeddingsCreate;
  /** Resource for '/files' has methods for the following verbs: get, post */
  (path: "/files"): FilesList;
  /** Resource for '/files/files/\{file_id\}' has methods for the following verbs: post, delete */
  (path: "/files/files/{file_id}", fileId: string): FilesRetrieve;
  /** Resource for '/files/files/\{file_id\}/content' has methods for the following verbs: get */
  (path: "/files/files/{file_id}/content", fileId: string): FilesDownload;
  /** Resource for '/fine-tunes' has methods for the following verbs: post, get */
  (path: "/fine-tunes"): FineTunesCreate;
  /** Resource for '/fine-tunes/\{fine_tune_id\}' has methods for the following verbs: get */
  (path: "/fine-tunes/{fine_tune_id}", fineTuneId: string): FineTunesRetrieve;
  /** Resource for '/fine-tunes/\{fine_tune_id\}/events' has methods for the following verbs: get */
  (
    path: "/fine-tunes/{fine_tune_id}/events",
    fineTuneId: string
  ): FineTunesListEvents;
  /** Resource for '/fine-tunes/\{fine_tune_id\}/cancel' has methods for the following verbs: post */
  (
    path: "/fine-tunes/{fine_tune_id}/cancel",
    fineTuneId: string
  ): FineTunesCancel;
  /** Resource for '/models' has methods for the following verbs: get */
  (path: "/models"): ModelsList;
  /** Resource for '/models/\{model\}' has methods for the following verbs: get, delete */
  (path: "/models/{model}", model: string): ModelsRetrieve;
  /** Resource for '/moderations' has methods for the following verbs: post */
  (path: "/moderations"): ModerationsCreate;
}

export type OpenAIContext = Client & {
  path: Routes;
};

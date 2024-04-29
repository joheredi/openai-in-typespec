// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;
using System.Linq;

namespace OpenAI.Internal.Models
{
    /// <summary> Represents an execution run on a [thread](/docs/api-reference/threads). </summary>
    internal partial class RunObject
    {
        /// <summary>
        /// Keeps track of any properties unknown to the library.
        /// <para>
        /// To assign an object to the value of this property use <see cref="BinaryData.FromObjectAsJson{T}(T, System.Text.Json.JsonSerializerOptions?)"/>.
        /// </para>
        /// <para>
        /// To assign an already formatted json string to this property use <see cref="BinaryData.FromString(string)"/>.
        /// </para>
        /// <para>
        /// Examples:
        /// <list type="bullet">
        /// <item>
        /// <term>BinaryData.FromObjectAsJson("foo")</term>
        /// <description>Creates a payload of "foo".</description>
        /// </item>
        /// <item>
        /// <term>BinaryData.FromString("\"foo\"")</term>
        /// <description>Creates a payload of "foo".</description>
        /// </item>
        /// <item>
        /// <term>BinaryData.FromObjectAsJson(new { key = "value" })</term>
        /// <description>Creates a payload of { "key": "value" }.</description>
        /// </item>
        /// <item>
        /// <term>BinaryData.FromString("{\"key\": \"value\"}")</term>
        /// <description>Creates a payload of { "key": "value" }.</description>
        /// </item>
        /// </list>
        /// </para>
        /// </summary>
        private IDictionary<string, BinaryData> _serializedAdditionalRawData;

        /// <summary> Initializes a new instance of <see cref="RunObject"/>. </summary>
        /// <param name="id"> The identifier, which can be referenced in API endpoints. </param>
        /// <param name="createdAt"> The Unix timestamp (in seconds) for when the run was created. </param>
        /// <param name="threadId"> The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. </param>
        /// <param name="assistantId"> The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. </param>
        /// <param name="status">
        /// The status of the run, which can be either `queued`, `in_progress`, `requires_action`,
        /// `cancelling`, `cancelled`, `failed`, `completed`, or `expired`.
        /// </param>
        /// <param name="requiredAction"> Details on the action required to continue the run. Will be `null` if no action is required. </param>
        /// <param name="lastError"> The last error associated with this run. Will be `null` if there are no errors. </param>
        /// <param name="expiresAt"> The Unix timestamp (in seconds) for when the run will expire. </param>
        /// <param name="startedAt"> The Unix timestamp (in seconds) for when the run was started. </param>
        /// <param name="cancelledAt"> The Unix timestamp (in seconds) for when the run was cancelled. </param>
        /// <param name="failedAt"> The Unix timestamp (in seconds) for when the run failed. </param>
        /// <param name="completedAt"> The Unix timestamp (in seconds) for when the run was completed. </param>
        /// <param name="model"> The model that the [assistant](/docs/api-reference/assistants) used for this run. </param>
        /// <param name="instructions"> The instructions that the [assistant](/docs/api-reference/assistants) used for this run. </param>
        /// <param name="tools"> The list of tools that the [assistant](/docs/api-reference/assistants) used for this run. </param>
        /// <param name="fileIds">
        /// The list of [File](/docs/api-reference/files) IDs the
        /// [assistant](/docs/api-reference/assistants) used for this run.
        /// </param>
        /// <param name="metadata">
        /// Set of 16 key-value pairs that can be attached to an object. This can be useful for storing
        /// additional information about the object in a structured format. Keys can be a maximum of 64
        /// characters long and values can be a maxium of 512 characters long.
        /// </param>
        /// <param name="usage"></param>
        /// <exception cref="ArgumentNullException"> <paramref name="id"/>, <paramref name="threadId"/>, <paramref name="assistantId"/>, <paramref name="model"/>, <paramref name="instructions"/>, <paramref name="tools"/>, <paramref name="fileIds"/> or <paramref name="usage"/> is null. </exception>
        internal RunObject(string id, DateTimeOffset createdAt, string threadId, string assistantId, RunObjectStatus status, RunObjectRequiredAction requiredAction, RunObjectLastError lastError, DateTimeOffset expiresAt, DateTimeOffset? startedAt, DateTimeOffset? cancelledAt, DateTimeOffset? failedAt, DateTimeOffset? completedAt, string model, string instructions, IEnumerable<BinaryData> tools, IEnumerable<string> fileIds, IReadOnlyDictionary<string, string> metadata, RunCompletionUsage usage)
        {
            Argument.AssertNotNull(id, nameof(id));
            Argument.AssertNotNull(threadId, nameof(threadId));
            Argument.AssertNotNull(assistantId, nameof(assistantId));
            Argument.AssertNotNull(model, nameof(model));
            Argument.AssertNotNull(instructions, nameof(instructions));
            Argument.AssertNotNull(tools, nameof(tools));
            Argument.AssertNotNull(fileIds, nameof(fileIds));
            Argument.AssertNotNull(usage, nameof(usage));

            Id = id;
            CreatedAt = createdAt;
            ThreadId = threadId;
            AssistantId = assistantId;
            Status = status;
            RequiredAction = requiredAction;
            LastError = lastError;
            ExpiresAt = expiresAt;
            StartedAt = startedAt;
            CancelledAt = cancelledAt;
            FailedAt = failedAt;
            CompletedAt = completedAt;
            Model = model;
            Instructions = instructions;
            Tools = tools.ToList();
            FileIds = fileIds.ToList();
            Metadata = metadata;
            Usage = usage;
        }

        /// <summary> Initializes a new instance of <see cref="RunObject"/>. </summary>
        /// <param name="id"> The identifier, which can be referenced in API endpoints. </param>
        /// <param name="object"> The object type, which is always `thread.run`. </param>
        /// <param name="createdAt"> The Unix timestamp (in seconds) for when the run was created. </param>
        /// <param name="threadId"> The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. </param>
        /// <param name="assistantId"> The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. </param>
        /// <param name="status">
        /// The status of the run, which can be either `queued`, `in_progress`, `requires_action`,
        /// `cancelling`, `cancelled`, `failed`, `completed`, or `expired`.
        /// </param>
        /// <param name="requiredAction"> Details on the action required to continue the run. Will be `null` if no action is required. </param>
        /// <param name="lastError"> The last error associated with this run. Will be `null` if there are no errors. </param>
        /// <param name="expiresAt"> The Unix timestamp (in seconds) for when the run will expire. </param>
        /// <param name="startedAt"> The Unix timestamp (in seconds) for when the run was started. </param>
        /// <param name="cancelledAt"> The Unix timestamp (in seconds) for when the run was cancelled. </param>
        /// <param name="failedAt"> The Unix timestamp (in seconds) for when the run failed. </param>
        /// <param name="completedAt"> The Unix timestamp (in seconds) for when the run was completed. </param>
        /// <param name="model"> The model that the [assistant](/docs/api-reference/assistants) used for this run. </param>
        /// <param name="instructions"> The instructions that the [assistant](/docs/api-reference/assistants) used for this run. </param>
        /// <param name="tools"> The list of tools that the [assistant](/docs/api-reference/assistants) used for this run. </param>
        /// <param name="fileIds">
        /// The list of [File](/docs/api-reference/files) IDs the
        /// [assistant](/docs/api-reference/assistants) used for this run.
        /// </param>
        /// <param name="metadata">
        /// Set of 16 key-value pairs that can be attached to an object. This can be useful for storing
        /// additional information about the object in a structured format. Keys can be a maximum of 64
        /// characters long and values can be a maxium of 512 characters long.
        /// </param>
        /// <param name="usage"></param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal RunObject(string id, RunObjectObject @object, DateTimeOffset createdAt, string threadId, string assistantId, RunObjectStatus status, RunObjectRequiredAction requiredAction, RunObjectLastError lastError, DateTimeOffset expiresAt, DateTimeOffset? startedAt, DateTimeOffset? cancelledAt, DateTimeOffset? failedAt, DateTimeOffset? completedAt, string model, string instructions, IReadOnlyList<BinaryData> tools, IReadOnlyList<string> fileIds, IReadOnlyDictionary<string, string> metadata, RunCompletionUsage usage, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Id = id;
            Object = @object;
            CreatedAt = createdAt;
            ThreadId = threadId;
            AssistantId = assistantId;
            Status = status;
            RequiredAction = requiredAction;
            LastError = lastError;
            ExpiresAt = expiresAt;
            StartedAt = startedAt;
            CancelledAt = cancelledAt;
            FailedAt = failedAt;
            CompletedAt = completedAt;
            Model = model;
            Instructions = instructions;
            Tools = tools;
            FileIds = fileIds;
            Metadata = metadata;
            Usage = usage;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="RunObject"/> for deserialization. </summary>
        internal RunObject()
        {
        }

        /// <summary> The identifier, which can be referenced in API endpoints. </summary>
        public string Id { get; }
        /// <summary> The object type, which is always `thread.run`. </summary>
        public RunObjectObject Object { get; } = RunObjectObject.ThreadRun;

        /// <summary> The Unix timestamp (in seconds) for when the run was created. </summary>
        public DateTimeOffset CreatedAt { get; }
        /// <summary> The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. </summary>
        public string ThreadId { get; }
        /// <summary> The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. </summary>
        public string AssistantId { get; }
        /// <summary>
        /// The status of the run, which can be either `queued`, `in_progress`, `requires_action`,
        /// `cancelling`, `cancelled`, `failed`, `completed`, or `expired`.
        /// </summary>
        public RunObjectStatus Status { get; }
        /// <summary> Details on the action required to continue the run. Will be `null` if no action is required. </summary>
        public RunObjectRequiredAction RequiredAction { get; }
        /// <summary> The last error associated with this run. Will be `null` if there are no errors. </summary>
        public RunObjectLastError LastError { get; }
        /// <summary> The Unix timestamp (in seconds) for when the run will expire. </summary>
        public DateTimeOffset ExpiresAt { get; }
        /// <summary> The Unix timestamp (in seconds) for when the run was started. </summary>
        public DateTimeOffset? StartedAt { get; }
        /// <summary> The Unix timestamp (in seconds) for when the run was cancelled. </summary>
        public DateTimeOffset? CancelledAt { get; }
        /// <summary> The Unix timestamp (in seconds) for when the run failed. </summary>
        public DateTimeOffset? FailedAt { get; }
        /// <summary> The Unix timestamp (in seconds) for when the run was completed. </summary>
        public DateTimeOffset? CompletedAt { get; }
        /// <summary> The model that the [assistant](/docs/api-reference/assistants) used for this run. </summary>
        public string Model { get; }
        /// <summary> The instructions that the [assistant](/docs/api-reference/assistants) used for this run. </summary>
        public string Instructions { get; }
        /// <summary>
        /// The list of tools that the [assistant](/docs/api-reference/assistants) used for this run.
        /// <para>
        /// To assign an object to the element of this property use <see cref="BinaryData.FromObjectAsJson{T}(T, System.Text.Json.JsonSerializerOptions?)"/>.
        /// </para>
        /// <para>
        /// To assign an already formatted json string to this property use <see cref="BinaryData.FromString(string)"/>.
        /// </para>
        /// <para>
        /// Examples:
        /// <list type="bullet">
        /// <item>
        /// <term>BinaryData.FromObjectAsJson("foo")</term>
        /// <description>Creates a payload of "foo".</description>
        /// </item>
        /// <item>
        /// <term>BinaryData.FromString("\"foo\"")</term>
        /// <description>Creates a payload of "foo".</description>
        /// </item>
        /// <item>
        /// <term>BinaryData.FromObjectAsJson(new { key = "value" })</term>
        /// <description>Creates a payload of { "key": "value" }.</description>
        /// </item>
        /// <item>
        /// <term>BinaryData.FromString("{\"key\": \"value\"}")</term>
        /// <description>Creates a payload of { "key": "value" }.</description>
        /// </item>
        /// </list>
        /// </para>
        /// </summary>
        public IReadOnlyList<BinaryData> Tools { get; }
        /// <summary>
        /// The list of [File](/docs/api-reference/files) IDs the
        /// [assistant](/docs/api-reference/assistants) used for this run.
        /// </summary>
        public IReadOnlyList<string> FileIds { get; }
        /// <summary>
        /// Set of 16 key-value pairs that can be attached to an object. This can be useful for storing
        /// additional information about the object in a structured format. Keys can be a maximum of 64
        /// characters long and values can be a maxium of 512 characters long.
        /// </summary>
        public IReadOnlyDictionary<string, string> Metadata { get; }
        /// <summary> Gets the usage. </summary>
        public RunCompletionUsage Usage { get; }
    }
}

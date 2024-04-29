// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace OpenAI.Internal.Models
{
    /// <summary> Tool call objects. </summary>
    internal partial class RunToolCallObject
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

        /// <summary> Initializes a new instance of <see cref="RunToolCallObject"/>. </summary>
        /// <param name="id">
        /// The ID of the tool call. This ID must be referenced when you submit the tool outputs in using
        /// the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
        /// </param>
        /// <param name="function"> The function definition. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="id"/> or <paramref name="function"/> is null. </exception>
        internal RunToolCallObject(string id, RunToolCallObjectFunction function)
        {
            Argument.AssertNotNull(id, nameof(id));
            Argument.AssertNotNull(function, nameof(function));

            Id = id;
            Function = function;
        }

        /// <summary> Initializes a new instance of <see cref="RunToolCallObject"/>. </summary>
        /// <param name="id">
        /// The ID of the tool call. This ID must be referenced when you submit the tool outputs in using
        /// the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
        /// </param>
        /// <param name="type"> The type of tool call the output is required for. For now, this is always 'function'. </param>
        /// <param name="function"> The function definition. </param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal RunToolCallObject(string id, RunToolCallObjectType type, RunToolCallObjectFunction function, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Id = id;
            Type = type;
            Function = function;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="RunToolCallObject"/> for deserialization. </summary>
        internal RunToolCallObject()
        {
        }

        /// <summary>
        /// The ID of the tool call. This ID must be referenced when you submit the tool outputs in using
        /// the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
        /// </summary>
        public string Id { get; }
        /// <summary> The type of tool call the output is required for. For now, this is always 'function'. </summary>
        public RunToolCallObjectType Type { get; } = RunToolCallObjectType.Function;

        /// <summary> The function definition. </summary>
        public RunToolCallObjectFunction Function { get; }
    }
}

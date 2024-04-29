// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;
using System.Linq;

namespace OpenAI.Internal.Models
{
    /// <summary> Details of the tool call. </summary>
    internal partial class RunStepDetailsToolCallsObject
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

        /// <summary> Initializes a new instance of <see cref="RunStepDetailsToolCallsObject"/>. </summary>
        /// <param name="toolCalls">
        /// An array of tool calls the run step was involved in. These can be associated with one of three
        /// types of tools: 'code_interpreter', 'retrieval', or 'function'.
        /// </param>
        /// <exception cref="ArgumentNullException"> <paramref name="toolCalls"/> is null. </exception>
        internal RunStepDetailsToolCallsObject(IEnumerable<BinaryData> toolCalls)
        {
            Argument.AssertNotNull(toolCalls, nameof(toolCalls));

            ToolCalls = toolCalls.ToList();
        }

        /// <summary> Initializes a new instance of <see cref="RunStepDetailsToolCallsObject"/>. </summary>
        /// <param name="type"> Always 'tool_calls'. </param>
        /// <param name="toolCalls">
        /// An array of tool calls the run step was involved in. These can be associated with one of three
        /// types of tools: 'code_interpreter', 'retrieval', or 'function'.
        /// </param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal RunStepDetailsToolCallsObject(RunStepDetailsToolCallsObjectType type, IReadOnlyList<BinaryData> toolCalls, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Type = type;
            ToolCalls = toolCalls;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="RunStepDetailsToolCallsObject"/> for deserialization. </summary>
        internal RunStepDetailsToolCallsObject()
        {
        }

        /// <summary> Always 'tool_calls'. </summary>
        public RunStepDetailsToolCallsObjectType Type { get; } = RunStepDetailsToolCallsObjectType.ToolCalls;

        /// <summary>
        /// An array of tool calls the run step was involved in. These can be associated with one of three
        /// types of tools: 'code_interpreter', 'retrieval', or 'function'.
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
        public IReadOnlyList<BinaryData> ToolCalls { get; }
    }
}

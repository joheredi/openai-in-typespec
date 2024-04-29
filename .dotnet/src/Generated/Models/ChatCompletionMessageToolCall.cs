// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace OpenAI.Internal.Models
{
    /// <summary> The ChatCompletionMessageToolCall. </summary>
    internal partial class ChatCompletionMessageToolCall
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

        /// <summary> Initializes a new instance of <see cref="ChatCompletionMessageToolCall"/>. </summary>
        /// <param name="id"> The ID of the tool call. </param>
        /// <param name="function"> The function that the model called. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="id"/> or <paramref name="function"/> is null. </exception>
        public ChatCompletionMessageToolCall(string id, ChatCompletionMessageToolCallFunction function)
        {
            Argument.AssertNotNull(id, nameof(id));
            Argument.AssertNotNull(function, nameof(function));

            Id = id;
            Function = function;
        }

        /// <summary> Initializes a new instance of <see cref="ChatCompletionMessageToolCall"/>. </summary>
        /// <param name="id"> The ID of the tool call. </param>
        /// <param name="type"> The type of the tool. Currently, only 'function' is supported. </param>
        /// <param name="function"> The function that the model called. </param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal ChatCompletionMessageToolCall(string id, ChatCompletionMessageToolCallType type, ChatCompletionMessageToolCallFunction function, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Id = id;
            Type = type;
            Function = function;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="ChatCompletionMessageToolCall"/> for deserialization. </summary>
        internal ChatCompletionMessageToolCall()
        {
        }

        /// <summary> The ID of the tool call. </summary>
        public string Id { get; set; }
        /// <summary> The type of the tool. Currently, only 'function' is supported. </summary>
        public ChatCompletionMessageToolCallType Type { get; } = ChatCompletionMessageToolCallType.Function;

        /// <summary> The function that the model called. </summary>
        public ChatCompletionMessageToolCallFunction Function { get; set; }
    }
}

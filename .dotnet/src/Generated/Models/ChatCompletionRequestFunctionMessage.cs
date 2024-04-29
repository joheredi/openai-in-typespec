// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace OpenAI.Internal.Models
{
    /// <summary> The ChatCompletionRequestFunctionMessage. </summary>
    internal partial class ChatCompletionRequestFunctionMessage
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

        /// <summary> Initializes a new instance of <see cref="ChatCompletionRequestFunctionMessage"/>. </summary>
        /// <param name="content"> The contents of the function message. </param>
        /// <param name="name"> The name of the function to call. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="name"/> is null. </exception>
        public ChatCompletionRequestFunctionMessage(string content, string name)
        {
            Argument.AssertNotNull(name, nameof(name));

            Content = content;
            Name = name;
        }

        /// <summary> Initializes a new instance of <see cref="ChatCompletionRequestFunctionMessage"/>. </summary>
        /// <param name="role"> The role of the messages author, in this case 'function'. </param>
        /// <param name="content"> The contents of the function message. </param>
        /// <param name="name"> The name of the function to call. </param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal ChatCompletionRequestFunctionMessage(ChatCompletionRequestFunctionMessageRole role, string content, string name, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Role = role;
            Content = content;
            Name = name;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="ChatCompletionRequestFunctionMessage"/> for deserialization. </summary>
        internal ChatCompletionRequestFunctionMessage()
        {
        }

        /// <summary> The role of the messages author, in this case 'function'. </summary>
        public ChatCompletionRequestFunctionMessageRole Role { get; } = ChatCompletionRequestFunctionMessageRole.Function;

        /// <summary> The contents of the function message. </summary>
        public string Content { get; }
        /// <summary> The name of the function to call. </summary>
        public string Name { get; }
    }
}

// <auto-generated/>

using System;
using System.Collections.Generic;

namespace OpenAI.Internal.Models
{
    /// <summary> Usage statistics for the completion request. </summary>
    internal partial class CompletionUsage
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

        /// <summary> Initializes a new instance of <see cref="CompletionUsage"/>. </summary>
        /// <param name="promptTokens"> Number of tokens in the prompt. </param>
        /// <param name="completionTokens"> Number of tokens in the generated completion. </param>
        /// <param name="totalTokens"> Total number of tokens used in the request (prompt + completion). </param>
        internal CompletionUsage(long promptTokens, long completionTokens, long totalTokens)
        {
            PromptTokens = promptTokens;
            CompletionTokens = completionTokens;
            TotalTokens = totalTokens;
        }

        /// <summary> Initializes a new instance of <see cref="CompletionUsage"/>. </summary>
        /// <param name="promptTokens"> Number of tokens in the prompt. </param>
        /// <param name="completionTokens"> Number of tokens in the generated completion. </param>
        /// <param name="totalTokens"> Total number of tokens used in the request (prompt + completion). </param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal CompletionUsage(long promptTokens, long completionTokens, long totalTokens, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            PromptTokens = promptTokens;
            CompletionTokens = completionTokens;
            TotalTokens = totalTokens;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="CompletionUsage"/> for deserialization. </summary>
        internal CompletionUsage()
        {
        }

        /// <summary> Number of tokens in the prompt. </summary>
        public long PromptTokens { get; }
        /// <summary> Number of tokens in the generated completion. </summary>
        public long CompletionTokens { get; }
        /// <summary> Total number of tokens used in the request (prompt + completion). </summary>
        public long TotalTokens { get; }
    }
}
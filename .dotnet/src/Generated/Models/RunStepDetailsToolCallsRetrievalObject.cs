// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace OpenAI.Internal.Models
{
    /// <summary> The RunStepDetailsToolCallsRetrievalObject. </summary>
    internal partial class RunStepDetailsToolCallsRetrievalObject
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

        /// <summary> Initializes a new instance of <see cref="RunStepDetailsToolCallsRetrievalObject"/>. </summary>
        /// <param name="id"> The ID of the tool call object. </param>
        /// <param name="retrieval"> For now, this is always going to be an empty object. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="id"/> or <paramref name="retrieval"/> is null. </exception>
        internal RunStepDetailsToolCallsRetrievalObject(string id, IReadOnlyDictionary<string, string> retrieval)
        {
            Argument.AssertNotNull(id, nameof(id));
            Argument.AssertNotNull(retrieval, nameof(retrieval));

            Id = id;
            Retrieval = retrieval;
        }

        /// <summary> Initializes a new instance of <see cref="RunStepDetailsToolCallsRetrievalObject"/>. </summary>
        /// <param name="id"> The ID of the tool call object. </param>
        /// <param name="type"> The type of tool call. This is always going to be 'retrieval' for this type of tool call. </param>
        /// <param name="retrieval"> For now, this is always going to be an empty object. </param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal RunStepDetailsToolCallsRetrievalObject(string id, RunStepDetailsToolCallsRetrievalObjectType type, IReadOnlyDictionary<string, string> retrieval, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Id = id;
            Type = type;
            Retrieval = retrieval;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="RunStepDetailsToolCallsRetrievalObject"/> for deserialization. </summary>
        internal RunStepDetailsToolCallsRetrievalObject()
        {
        }

        /// <summary> The ID of the tool call object. </summary>
        public string Id { get; }
        /// <summary> The type of tool call. This is always going to be 'retrieval' for this type of tool call. </summary>
        public RunStepDetailsToolCallsRetrievalObjectType Type { get; } = RunStepDetailsToolCallsRetrievalObjectType.Retrieval;

        /// <summary> For now, this is always going to be an empty object. </summary>
        public IReadOnlyDictionary<string, string> Retrieval { get; }
    }
}

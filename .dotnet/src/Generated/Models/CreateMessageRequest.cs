// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace OpenAI.Internal.Models
{
    /// <summary> The CreateMessageRequest. </summary>
    internal partial class CreateMessageRequest
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

        /// <summary> Initializes a new instance of <see cref="CreateMessageRequest"/>. </summary>
        /// <param name="content"> The content of the message. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        public CreateMessageRequest(string content)
        {
            Argument.AssertNotNull(content, nameof(content));

            Content = content;
            FileIds = new ChangeTrackingList<string>();
            Metadata = new ChangeTrackingDictionary<string, string>();
        }

        /// <summary> Initializes a new instance of <see cref="CreateMessageRequest"/>. </summary>
        /// <param name="role"> The role of the entity that is creating the message. Currently only 'user' is supported. </param>
        /// <param name="content"> The content of the message. </param>
        /// <param name="fileIds">
        /// A list of [File](/docs/api-reference/files) IDs that the message should use. There can be a
        /// maximum of 10 files attached to a message. Useful for tools like 'retrieval' and
        /// 'code_interpreter' that can access and use files.
        /// </param>
        /// <param name="metadata">
        /// Set of 16 key-value pairs that can be attached to an object. This can be useful for storing
        /// additional information about the object in a structured format. Keys can be a maximum of 64
        /// characters long and values can be a maxium of 512 characters long.
        /// </param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal CreateMessageRequest(CreateMessageRequestRole role, string content, IList<string> fileIds, IDictionary<string, string> metadata, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Role = role;
            Content = content;
            FileIds = fileIds;
            Metadata = metadata;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="CreateMessageRequest"/> for deserialization. </summary>
        internal CreateMessageRequest()
        {
        }

        /// <summary> The role of the entity that is creating the message. Currently only 'user' is supported. </summary>
        public CreateMessageRequestRole Role { get; } = CreateMessageRequestRole.User;

        /// <summary> The content of the message. </summary>
        public string Content { get; }
        /// <summary>
        /// A list of [File](/docs/api-reference/files) IDs that the message should use. There can be a
        /// maximum of 10 files attached to a message. Useful for tools like 'retrieval' and
        /// 'code_interpreter' that can access and use files.
        /// </summary>
        public IList<string> FileIds { get; }
        /// <summary>
        /// Set of 16 key-value pairs that can be attached to an object. This can be useful for storing
        /// additional information about the object in a structured format. Keys can be a maximum of 64
        /// characters long and values can be a maxium of 512 characters long.
        /// </summary>
        public IDictionary<string, string> Metadata { get; set; }
    }
}

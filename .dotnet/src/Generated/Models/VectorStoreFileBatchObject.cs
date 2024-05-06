// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace OpenAI.Internal.Models
{
    /// <summary> A batch of files attached to a vector store. </summary>
    internal partial class VectorStoreFileBatchObject
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

        /// <summary> Initializes a new instance of <see cref="VectorStoreFileBatchObject"/>. </summary>
        /// <param name="id"> The identifier, which can be referenced in API endpoints. </param>
        /// <param name="createdAt"> The Unix timestamp (in seconds) for when the vector store files batch was created. </param>
        /// <param name="vectorStoreId">
        /// The ID of the [vector store](/docs/api-reference/vector-stores/object) that the
        /// [File](/docs/api-reference/files) is attached to.
        /// </param>
        /// <param name="status"> The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. </param>
        /// <param name="fileCounts"></param>
        /// <exception cref="ArgumentNullException"> <paramref name="id"/>, <paramref name="vectorStoreId"/> or <paramref name="fileCounts"/> is null. </exception>
        internal VectorStoreFileBatchObject(string id, DateTimeOffset createdAt, string vectorStoreId, VectorStoreFileBatchObjectStatus status, VectorStoreFileBatchObjectFileCounts fileCounts)
        {
            Argument.AssertNotNull(id, nameof(id));
            Argument.AssertNotNull(vectorStoreId, nameof(vectorStoreId));
            Argument.AssertNotNull(fileCounts, nameof(fileCounts));

            Id = id;
            CreatedAt = createdAt;
            VectorStoreId = vectorStoreId;
            Status = status;
            FileCounts = fileCounts;
        }

        /// <summary> Initializes a new instance of <see cref="VectorStoreFileBatchObject"/>. </summary>
        /// <param name="id"> The identifier, which can be referenced in API endpoints. </param>
        /// <param name="object"> The object type, which is always `vector_store.file_batch`. </param>
        /// <param name="createdAt"> The Unix timestamp (in seconds) for when the vector store files batch was created. </param>
        /// <param name="vectorStoreId">
        /// The ID of the [vector store](/docs/api-reference/vector-stores/object) that the
        /// [File](/docs/api-reference/files) is attached to.
        /// </param>
        /// <param name="status"> The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. </param>
        /// <param name="fileCounts"></param>
        /// <param name="serializedAdditionalRawData"> Keeps track of any properties unknown to the library. </param>
        internal VectorStoreFileBatchObject(string id, VectorStoreFileBatchObjectObject @object, DateTimeOffset createdAt, string vectorStoreId, VectorStoreFileBatchObjectStatus status, VectorStoreFileBatchObjectFileCounts fileCounts, IDictionary<string, BinaryData> serializedAdditionalRawData)
        {
            Id = id;
            Object = @object;
            CreatedAt = createdAt;
            VectorStoreId = vectorStoreId;
            Status = status;
            FileCounts = fileCounts;
            _serializedAdditionalRawData = serializedAdditionalRawData;
        }

        /// <summary> Initializes a new instance of <see cref="VectorStoreFileBatchObject"/> for deserialization. </summary>
        internal VectorStoreFileBatchObject()
        {
        }

        /// <summary> The identifier, which can be referenced in API endpoints. </summary>
        public string Id { get; }
        /// <summary> The object type, which is always `vector_store.file_batch`. </summary>
        public VectorStoreFileBatchObjectObject Object { get; } = VectorStoreFileBatchObjectObject.VectorStoreFilesBatch;

        /// <summary> The Unix timestamp (in seconds) for when the vector store files batch was created. </summary>
        public DateTimeOffset CreatedAt { get; }
        /// <summary>
        /// The ID of the [vector store](/docs/api-reference/vector-stores/object) that the
        /// [File](/docs/api-reference/files) is attached to.
        /// </summary>
        public string VectorStoreId { get; }
        /// <summary> The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. </summary>
        public VectorStoreFileBatchObjectStatus Status { get; }
        /// <summary> Gets the file counts. </summary>
        public VectorStoreFileBatchObjectFileCounts FileCounts { get; }
    }
}

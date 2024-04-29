// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Text.Json;

namespace OpenAI.Internal.Models
{
    internal partial class CreateChatCompletionStreamResponseChoice : IJsonModel<CreateChatCompletionStreamResponseChoice>
    {
        void IJsonModel<CreateChatCompletionStreamResponseChoice>.Write(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<CreateChatCompletionStreamResponseChoice>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(CreateChatCompletionStreamResponseChoice)} does not support writing '{format}' format.");
            }

            writer.WriteStartObject();
            writer.WritePropertyName("delta"u8);
            writer.WriteObjectValue<ChatCompletionStreamResponseDelta>(Delta, options);
            if (Optional.IsDefined(Logprobs))
            {
                if (Logprobs != null)
                {
                    writer.WritePropertyName("logprobs"u8);
                    writer.WriteObjectValue<CreateChatCompletionStreamResponseChoiceLogprobs>(Logprobs, options);
                }
                else
                {
                    writer.WriteNull("logprobs");
                }
            }
            writer.WritePropertyName("finish_reason"u8);
            writer.WriteStringValue(FinishReason);
            writer.WritePropertyName("index"u8);
            writer.WriteNumberValue(Index);
            if (options.Format != "W" && _serializedAdditionalRawData != null)
            {
                foreach (var item in _serializedAdditionalRawData)
                {
                    writer.WritePropertyName(item.Key);
#if NET6_0_OR_GREATER
				writer.WriteRawValue(item.Value);
#else
                    using (JsonDocument document = JsonDocument.Parse(item.Value))
                    {
                        JsonSerializer.Serialize(writer, document.RootElement);
                    }
#endif
                }
            }
            writer.WriteEndObject();
        }

        CreateChatCompletionStreamResponseChoice IJsonModel<CreateChatCompletionStreamResponseChoice>.Create(ref Utf8JsonReader reader, ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<CreateChatCompletionStreamResponseChoice>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(CreateChatCompletionStreamResponseChoice)} does not support reading '{format}' format.");
            }

            using JsonDocument document = JsonDocument.ParseValue(ref reader);
            return DeserializeCreateChatCompletionStreamResponseChoice(document.RootElement, options);
        }

        internal static CreateChatCompletionStreamResponseChoice DeserializeCreateChatCompletionStreamResponseChoice(JsonElement element, ModelReaderWriterOptions options = null)
        {
            options ??= new ModelReaderWriterOptions("W");

            if (element.ValueKind == JsonValueKind.Null)
            {
                return null;
            }
            ChatCompletionStreamResponseDelta delta = default;
            CreateChatCompletionStreamResponseChoiceLogprobs logprobs = default;
            string finishReason = default;
            int index = default;
            IDictionary<string, BinaryData> serializedAdditionalRawData = default;
            Dictionary<string, BinaryData> rawDataDictionary = new Dictionary<string, BinaryData>();
            foreach (var property in element.EnumerateObject())
            {
                if (property.NameEquals("delta"u8))
                {
                    delta = ChatCompletionStreamResponseDelta.DeserializeChatCompletionStreamResponseDelta(property.Value, options);
                    continue;
                }
                if (property.NameEquals("logprobs"u8))
                {
                    if (property.Value.ValueKind == JsonValueKind.Null)
                    {
                        logprobs = null;
                        continue;
                    }
                    logprobs = CreateChatCompletionStreamResponseChoiceLogprobs.DeserializeCreateChatCompletionStreamResponseChoiceLogprobs(property.Value, options);
                    continue;
                }
                if (property.NameEquals("finish_reason"u8))
                {
                    finishReason = property.Value.GetString();
                    continue;
                }
                if (property.NameEquals("index"u8))
                {
                    index = property.Value.GetInt32();
                    continue;
                }
                if (options.Format != "W")
                {
                    rawDataDictionary.Add(property.Name, BinaryData.FromString(property.Value.GetRawText()));
                }
            }
            serializedAdditionalRawData = rawDataDictionary;
            return new CreateChatCompletionStreamResponseChoice(delta, logprobs, finishReason, index, serializedAdditionalRawData);
        }

        BinaryData IPersistableModel<CreateChatCompletionStreamResponseChoice>.Write(ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<CreateChatCompletionStreamResponseChoice>)this).GetFormatFromOptions(options) : options.Format;

            switch (format)
            {
                case "J":
                    return ModelReaderWriter.Write(this, options);
                default:
                    throw new FormatException($"The model {nameof(CreateChatCompletionStreamResponseChoice)} does not support writing '{options.Format}' format.");
            }
        }

        CreateChatCompletionStreamResponseChoice IPersistableModel<CreateChatCompletionStreamResponseChoice>.Create(BinaryData data, ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<CreateChatCompletionStreamResponseChoice>)this).GetFormatFromOptions(options) : options.Format;

            switch (format)
            {
                case "J":
                    {
                        using JsonDocument document = JsonDocument.Parse(data);
                        return DeserializeCreateChatCompletionStreamResponseChoice(document.RootElement, options);
                    }
                default:
                    throw new FormatException($"The model {nameof(CreateChatCompletionStreamResponseChoice)} does not support reading '{options.Format}' format.");
            }
        }

        string IPersistableModel<CreateChatCompletionStreamResponseChoice>.GetFormatFromOptions(ModelReaderWriterOptions options) => "J";

        /// <summary> Deserializes the model from a raw response. </summary>
        /// <param name="response"> The result to deserialize the model from. </param>
        internal static CreateChatCompletionStreamResponseChoice FromResponse(PipelineResponse response)
        {
            using var document = JsonDocument.Parse(response.Content);
            return DeserializeCreateChatCompletionStreamResponseChoice(document.RootElement);
        }

        /// <summary> Convert into a Utf8JsonRequestBody. </summary>
        internal virtual BinaryContent ToBinaryBody()
        {
            return BinaryContent.Create(this, new ModelReaderWriterOptions("W"));
        }
    }
}

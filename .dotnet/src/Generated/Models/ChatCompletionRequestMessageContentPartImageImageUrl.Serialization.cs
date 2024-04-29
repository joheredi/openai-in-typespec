// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Text.Json;

namespace OpenAI.Internal.Models
{
    internal partial class ChatCompletionRequestMessageContentPartImageImageUrl : IJsonModel<ChatCompletionRequestMessageContentPartImageImageUrl>
    {
        void IJsonModel<ChatCompletionRequestMessageContentPartImageImageUrl>.Write(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<ChatCompletionRequestMessageContentPartImageImageUrl>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(ChatCompletionRequestMessageContentPartImageImageUrl)} does not support writing '{format}' format.");
            }

            writer.WriteStartObject();
            writer.WritePropertyName("url"u8);
            writer.WriteStringValue(Url.AbsoluteUri);
            if (Optional.IsDefined(Detail))
            {
                writer.WritePropertyName("detail"u8);
                writer.WriteStringValue(Detail.Value.ToString());
            }
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

        ChatCompletionRequestMessageContentPartImageImageUrl IJsonModel<ChatCompletionRequestMessageContentPartImageImageUrl>.Create(ref Utf8JsonReader reader, ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<ChatCompletionRequestMessageContentPartImageImageUrl>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(ChatCompletionRequestMessageContentPartImageImageUrl)} does not support reading '{format}' format.");
            }

            using JsonDocument document = JsonDocument.ParseValue(ref reader);
            return DeserializeChatCompletionRequestMessageContentPartImageImageUrl(document.RootElement, options);
        }

        internal static ChatCompletionRequestMessageContentPartImageImageUrl DeserializeChatCompletionRequestMessageContentPartImageImageUrl(JsonElement element, ModelReaderWriterOptions options = null)
        {
            options ??= new ModelReaderWriterOptions("W");

            if (element.ValueKind == JsonValueKind.Null)
            {
                return null;
            }
            Uri url = default;
            ChatCompletionRequestMessageContentPartImageImageUrlDetail? detail = default;
            IDictionary<string, BinaryData> serializedAdditionalRawData = default;
            Dictionary<string, BinaryData> rawDataDictionary = new Dictionary<string, BinaryData>();
            foreach (var property in element.EnumerateObject())
            {
                if (property.NameEquals("url"u8))
                {
                    url = new Uri(property.Value.GetString());
                    continue;
                }
                if (property.NameEquals("detail"u8))
                {
                    if (property.Value.ValueKind == JsonValueKind.Null)
                    {
                        continue;
                    }
                    detail = new ChatCompletionRequestMessageContentPartImageImageUrlDetail(property.Value.GetString());
                    continue;
                }
                if (options.Format != "W")
                {
                    rawDataDictionary.Add(property.Name, BinaryData.FromString(property.Value.GetRawText()));
                }
            }
            serializedAdditionalRawData = rawDataDictionary;
            return new ChatCompletionRequestMessageContentPartImageImageUrl(url, detail, serializedAdditionalRawData);
        }

        BinaryData IPersistableModel<ChatCompletionRequestMessageContentPartImageImageUrl>.Write(ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<ChatCompletionRequestMessageContentPartImageImageUrl>)this).GetFormatFromOptions(options) : options.Format;

            switch (format)
            {
                case "J":
                    return ModelReaderWriter.Write(this, options);
                default:
                    throw new FormatException($"The model {nameof(ChatCompletionRequestMessageContentPartImageImageUrl)} does not support writing '{options.Format}' format.");
            }
        }

        ChatCompletionRequestMessageContentPartImageImageUrl IPersistableModel<ChatCompletionRequestMessageContentPartImageImageUrl>.Create(BinaryData data, ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<ChatCompletionRequestMessageContentPartImageImageUrl>)this).GetFormatFromOptions(options) : options.Format;

            switch (format)
            {
                case "J":
                    {
                        using JsonDocument document = JsonDocument.Parse(data);
                        return DeserializeChatCompletionRequestMessageContentPartImageImageUrl(document.RootElement, options);
                    }
                default:
                    throw new FormatException($"The model {nameof(ChatCompletionRequestMessageContentPartImageImageUrl)} does not support reading '{options.Format}' format.");
            }
        }

        string IPersistableModel<ChatCompletionRequestMessageContentPartImageImageUrl>.GetFormatFromOptions(ModelReaderWriterOptions options) => "J";

        /// <summary> Deserializes the model from a raw response. </summary>
        /// <param name="response"> The result to deserialize the model from. </param>
        internal static ChatCompletionRequestMessageContentPartImageImageUrl FromResponse(PipelineResponse response)
        {
            using var document = JsonDocument.Parse(response.Content);
            return DeserializeChatCompletionRequestMessageContentPartImageImageUrl(document.RootElement);
        }

        /// <summary> Convert into a Utf8JsonRequestBody. </summary>
        internal virtual BinaryContent ToBinaryBody()
        {
            return BinaryContent.Create(this, new ModelReaderWriterOptions("W"));
        }
    }
}

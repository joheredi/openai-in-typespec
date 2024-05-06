// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Threading;
using OpenAI.Audio;
using OpenAI.Batch;
using OpenAI.Embeddings;
using OpenAI.Files;
using OpenAI.FineTuning;
using OpenAI.Images;
using OpenAI.LegacyCompletions;
using OpenAI.Models;

namespace OpenAI
{
    // Data plane generated client.
    /// <summary> The OpenAI service client. </summary>
    public partial class OpenAIClient
    {
        private const string AuthorizationHeader = "Authorization";
        private readonly ApiKeyCredential _keyCredential;
        private const string AuthorizationApiKeyPrefix = "Bearer";
        private readonly ClientPipeline _pipeline;
        private readonly Uri _endpoint;

        /// <summary> The HTTP pipeline for sending and receiving REST requests and responses. </summary>
        public virtual ClientPipeline Pipeline => _pipeline;

        /// <summary> Initializes a new instance of OpenAIClient for mocking. </summary>
        protected OpenAIClient()
        {
        }
        private OpenAI.Internal.Assistants _cachedAssistants;
        private OpenAI.Internal.Chat _cachedChat;
        private OpenAI.Internal.Messages _cachedMessages;
        private OpenAI.Internal.Moderations _cachedModerations;
        private OpenAI.Internal.Runs _cachedRuns;
        private OpenAI.Internal.Threads _cachedThreads;

        /// <summary> Initializes a new instance of Assistants. </summary>
        internal OpenAI.Internal.Assistants GetAssistantsClient()
        {
            return Volatile.Read(ref _cachedAssistants) ?? Interlocked.CompareExchange(ref _cachedAssistants, new OpenAI.Internal.Assistants(_pipeline, _keyCredential, _endpoint), null) ?? _cachedAssistants;
        }

        /// <summary> Initializes a new instance of Messages. </summary>
        internal OpenAI.Internal.Messages GetMessagesClient()
        {
            return Volatile.Read(ref _cachedMessages) ?? Interlocked.CompareExchange(ref _cachedMessages, new OpenAI.Internal.Messages(_pipeline, _keyCredential, _endpoint), null) ?? _cachedMessages;
        }

        /// <summary> Initializes a new instance of Moderations. </summary>
        internal OpenAI.Internal.Moderations GetModerationsClient()
        {
            return Volatile.Read(ref _cachedModerations) ?? Interlocked.CompareExchange(ref _cachedModerations, new OpenAI.Internal.Moderations(_pipeline, _keyCredential, _endpoint), null) ?? _cachedModerations;
        }

        /// <summary> Initializes a new instance of Runs. </summary>
        internal OpenAI.Internal.Runs GetRunsClient()
        {
            return Volatile.Read(ref _cachedRuns) ?? Interlocked.CompareExchange(ref _cachedRuns, new OpenAI.Internal.Runs(_pipeline, _keyCredential, _endpoint), null) ?? _cachedRuns;
        }

        /// <summary> Initializes a new instance of Threads. </summary>
        internal OpenAI.Internal.Threads GetThreadsClient()
        {
            return Volatile.Read(ref _cachedThreads) ?? Interlocked.CompareExchange(ref _cachedThreads, new OpenAI.Internal.Threads(_pipeline, _keyCredential, _endpoint), null) ?? _cachedThreads;
        }
    }
}

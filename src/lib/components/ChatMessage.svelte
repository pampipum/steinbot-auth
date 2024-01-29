<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar';

    export let type: 'user' | 'assistant';
    export let message: string;

    // Function to convert newline characters to <br> tags
    const formatMessage = (msg: string) => msg.replace(/\n/g, '<br>');
</script>

<style>
    .chat-bubble {
        @apply p-2 rounded-lg text-sm;
    }
    .chat-bubble-user {
        @apply bg-gray-400 dark:bg-gray-800; /* Light mode: gray-500, Dark mode: gray-100 */
    }
    .chat-bubble-assistant {
        @apply bg-gray-200 dark:bg-gray-600; /* Light mode: gray-200, Dark mode: green-100 */
    }

</style>

<div class={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}>
    <Avatar.Root>
        <Avatar.Image 
            src={type === 'user' ? `https://ui-avatars.com/api/?name=Me` : 'avatar_bot.png'} 
            alt={`${type} avatar`}
        />
        <Avatar.Fallback>{type === 'user' ? 'Me' : 'Bot'}</Avatar.Fallback>
    </Avatar.Root>

    <div class="flex flex-col">
        <div class="text-sm font-medium">
            {type === 'user' ? 'Me' : 'Bot'}
        </div>
        <div class={`chat-bubble ${type === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}>
            {@html formatMessage(message)}
        </div>
    </div>
</div>




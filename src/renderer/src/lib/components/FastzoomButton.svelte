<script>
    export let delay;
    export let currentDelay;
</script>

<button
    on:click
    class="flex-1 border-2 border-primary rounded-md bg-secondary px-8 py-[0.125rem]"
    class:border-[#7775D1]={currentDelay === delay}
>
    {delay}
</button>

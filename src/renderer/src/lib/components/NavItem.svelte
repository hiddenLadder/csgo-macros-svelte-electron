<script>
    export let classList;
    export let active;
</script>

<li
    on:click
    class:border-rose-500={active}
    class:border-primary={!active}
    class:text-white={active}
    class="flex-1 flex justify-center items-center p-4 text-3xl border-b-4 hover:border-rose-500 hover:text-white transition-all duration-150 ease-in-out"
>
    <i class={classList} />
</li>

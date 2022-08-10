<script>
    import { fade } from "svelte/transition";
    export let classList;
    export let show;
</script>

{#if show}
    <div
        transition:fade={{ duration: 200 }}
        class={"z-10 fixed top-40 left-10 rounded-lg border-2 border-rose-500 bg-primary p-3 text-white shadow-lg shadow-rose-500 drop-shadow-lg" +
            classList}
    >
        <slot />
    </div>
{/if}

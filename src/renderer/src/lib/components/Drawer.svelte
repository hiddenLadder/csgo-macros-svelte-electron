<script>
    import { fly } from "svelte/transition";
    export let show;
    let drawer;
</script>

{#if show}
    <div
        on:click={() => (show = false)}
        class="fixed h-screen w-full top-10 left-0 bg-black/20 z-20"
    >
        <div
            bind:this={drawer}
            on:click|stopPropagation
            transition:fly={{ x: drawer.clientWidth }}
            class="fixed top-10 right-0 h-[calc(100vh-2.5rem)] w-5/6 border-l-4 flex border-rose-500 text-sm font-medium uppercase text-misc-color tracking-widest bg-secondary z-30"
        >
            <slot />
        </div>
    </div>
{/if}

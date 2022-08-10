<script>
    import { onMount } from "svelte";
    import { data } from "../stores";
    import { loadFrom } from "../utils";
    export let currentTab;
    import WeaponItem from "./WeaponItem.svelte";
    let items = [];
    onMount(() => {
        $data = loadFrom("hotkeys.json");
        items = [...$data.weapons];
    });
</script>

{#each items as item (item.name)}
    {#if item.type === currentTab}
        <WeaponItem on:keyChanged={(e) => (item.alias = e.detail)} {item} />
    {/if}
{/each}

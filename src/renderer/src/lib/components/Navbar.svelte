<script>
    import { TABS } from "../utils";
    import NavItem from "./NavItem.svelte";
    export let currentTab;
</script>

<nav class="bg-primary text-gray-400">
    <ul class="flex justify-around text-center">
        <NavItem active={currentTab === TABS.SMG}
            on:click={() => (currentTab = TABS.SMG)}
            classList="fa-solid fa-gun"
        />
        <NavItem active={currentTab === TABS.RIFLES}
            on:click={() => (currentTab = TABS.RIFLES)}
            classList="fa-solid fa-child-rifle"
        />
        <NavItem active={currentTab === TABS.MISC}
            on:click={() => (currentTab = TABS.MISC)}
            classList="fa-light fa-circle-ellipsis"
        />
    </ul>
</nav>

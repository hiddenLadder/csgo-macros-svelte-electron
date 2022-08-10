<script>
    import { currentActiveWeapon } from "../stores";
    import ChangeButton from "./ChangeButton.svelte";
    import Toggle from "./Toggle.svelte";
    export let item;
    function setCurrentActiveWeapon(e, name) {
        if ($currentActiveWeapon != name) {
            $currentActiveWeapon = name;
        } else {
            e.target.checked = true;
        }
    }
</script>

<div
    class="flex h-44 w-32 flex-col items-center gap-2 rounded-lg bg-primary pt-6 font-medium uppercase text-content shadow"
>
    <h1>{item.name}</h1>
    <div class="flex items-center justify-center">
        <Toggle
            name={item.name}
            on:change={(e) => setCurrentActiveWeapon(e, item.name)}
            checked={$currentActiveWeapon === item.name}
        />
    </div>
    <div class="flex flex-col items-center text-[13px] leading-5">
        <p class="text-gray-500">{item.alias ?? "кнопка"}</p>
        <ChangeButton on:keyChanged bind:value={item} name={item.name} />
    </div>
</div>

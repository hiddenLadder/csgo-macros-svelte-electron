<script>
    export let value;
    export let name;
    import { createEventDispatcher } from "svelte";
    import { isBeingChanged, data } from "../stores";
    import { saveChange } from "../utils";
    const dispatch = createEventDispatcher();
    function getAllKeys() {
        let keys = [];
        for (let item of $data.weapons) {
            keys.push(item.key);
        }
        keys.push($data.misc.noRecoil.key, $data.misc.resetActiveWeapon.key);
        return keys;
    }
    async function handler(e) {
        const currentKeys = getAllKeys();
        if (e.key === "Escape") {
            value.key = null;
            value.alias = null;
        } else {
            if (!currentKeys.includes(e.code)) {
                value.key = e.code;
                value.alias = e.key;
            }
        }
        $isBeingChanged = null;
        dispatch("keyChanged", value.alias);
        saveChange("hotkeys.json", $data);
        window.removeEventListener("keydown", handler);
    }
    function changeKey() {
        if (!$isBeingChanged) {
            $isBeingChanged = name;
            window.addEventListener("keydown", handler);
        }
    }
</script>

<button
    on:click={changeKey}
    class:animate-pulse={$isBeingChanged === name}
    class:text-green-500={$isBeingChanged === name}
    class:text-rose-500={!($isBeingChanged === name)}
    class="uppercase "
    >{$isBeingChanged === name ? "нажмите кнопку" : "назначить"}
</button>

<script>
    import { data } from "../stores";
    import { saveChange } from "../utils";
    import ChangeButton from "./ChangeButton.svelte";
    import Toggle from "./Toggle.svelte";
    function changeSound() {
        $data.misc.sound = !$data.misc.sound;
        saveChange("hotkeys.json", $data);
    }
    function changeSensitive(e) {
        $data.misc.sensitive = e.target.value;
        saveChange("hotkeys.json", $data);
    }
</script>

<div class="flex flex-1 flex-col p-4 justify-between">
    <div class="flex flex-col">
        <p>Чувствительность мыши</p>
        <div
            class="mb-2 mt-1 flex justify-between gap-2 rounded-lg bg-primary py-3 px-6"
        >
            <p class="-translate-y-[0.125rem] text-lg font-bold">
                {$data.misc.sensitive}
            </p>
            <input
                value={$data.misc.sensitive}
                on:change={changeSensitive}
                type="range"
                min="1"
                max="2.5"
                step="0.1"
                class="h-0.5 w-full appearance-none self-center bg-gradient-to-r from-sky-500 to-fuchsia-500"
            />
        </div>
    </div>
</div>
<div class="flex flex-1 flex-col border-l-[6px] border-[#222327] p-4">
    <div class="flex flex-col">
        <p class="self-start">антиотдача вкл/выкл</p>
        <div
            class="mb-2 mt-1 flex justify-between gap-4 rounded-lg bg-primary p-3 px-10"
        >
            <p>{$data.misc.noRecoil.alias ?? "кнопка"}</p>
            <ChangeButton name={"noRecoil"} bind:value={$data.misc.noRecoil} />
        </div>
    </div>
    <div class="flex flex-col">
        <p class="self-start">сброс активного оружия</p>
        <div
            class="mb-2 mt-1 flex justify-between gap-4 rounded-lg bg-primary p-3 px-10"
        >
            <p>{$data.misc.resetActiveWeapon.alias ?? "кнопка"}</p>
            <ChangeButton
                name={"resetActiveWeapon"}
                bind:value={$data.misc.resetActiveWeapon}
            />
        </div>
    </div>
    <div class="rounded-lg bg-primary">
        <div class="flex w-full items-center justify-start">
            <Toggle
                name="sound"
                on:change={changeSound}
                checked={$data.misc.sound}
            />
            <p class="tracking-wider">звук вкл/выкл</p>
        </div>
    </div>
</div>

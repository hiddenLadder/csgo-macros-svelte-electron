<script>
    import Toggle from "./Toggle.svelte";
    import { data } from "../stores";
    import { saveChange } from "../utils";
    function changeCrosshair() {
        $data.misc.crosshair.value = !$data.misc.crosshair.value;
        saveChange("hotkeys.json", $data);
    }
</script>

<div
    class="flex h-64 w-36 flex-col items-center rounded-lg bg-primary p-6 font-medium uppercase text-content"
>
    <p>прицел</p>
    <div class="flex items-center justify-center">
        <Toggle
            name="crosshair"
            on:change={changeCrosshair}
            checked={$data.misc.crosshair.value}
        />
    </div>
    <p class="text-xs text-rose-500">вид прицела</p>
    <div class="flex gap-4 pt-4 text-[#77767A] text-3xl">
        <i class="fa-light fa-circle hover:text-white" />
        <i class="-translate-y-2 fa-solid fa-period hover:text-white" />
        <i class="fa-solid fa-q hover:text-white" />
    </div>
    <div class="flex gap-4 pt-4 text-[#77767A] text-3xl">
        <i class="fa-light fa-crosshairs hover:text-white" />
        <i class="fa-duotone fa-crosshairs hover:text-white" />
    </div>
</div>

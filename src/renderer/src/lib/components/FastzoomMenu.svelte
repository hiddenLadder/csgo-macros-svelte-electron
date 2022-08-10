<script>
    import FastzoomButton from "./FastzoomButton.svelte";
    import Toggle from "./Toggle.svelte";
    import Tooltip from "./Tooltip.svelte";
    import { data } from "../stores";
    import { DELAY_OPTIONS, saveChange } from "../utils";
    let show = false;
    function changeFastzoom() {
        $data.misc.fastzoom = !$data.misc.fastzoom;
        saveChange("hotkeys.json", $data);
    }
    function changeDelay(delay) {
        $data.misc.delay = delay;
        saveChange("hotkeys.json", $data);
    }
</script>

<div class="gap-2">
    <Tooltip classList="h-60 w-52 flex flex-col" {show}
        ><h2>Fastzoom</h2>
        <div class="text-[12px]">
            <p>Кнопка выстрела: Alt.</p>
            <p>
                Фастзум создан для awp и ssg. Быстро зумится, стреляет и
                нажимает два раза "q".
            </p>
        </div>
        <h2>Задержка</h2>
        <div class="text-[12px]">
            <p>
                Задержка между зумом и выстрелом. Чем больше задержка, тем
                точнее получится выстрел.
            </p>
        </div></Tooltip
    >
    <div
        class="flex h-60 w-64 flex-col items-center rounded-lg bg-primary p-6 font-medium uppercase text-content"
    >
        <span
            on:mouseenter={() => (show = true)}
            on:mouseleave={() => (show = false)}
            class="fixed -translate-y-3 translate-x-3 cursor-default self-end rounded-full border px-2 hover:text-rose-500 hover:border-rose-500"
            >?</span
        >
        <p class="text-sm">awp / ssg</p>
        <p class="text-sm">fastzoom</p>
        <div class="flex items-center justify-center">
            <Toggle
                name="fastzoom"
                on:change={changeFastzoom}
                checked={$data.misc.fastzoom}
            />
        </div>
        <p class="text-xs text-content-secondary">задержка / мс</p>
        <div class="flex flex-wrap gap-4 pt-6">
            {#each DELAY_OPTIONS as delay}
                <FastzoomButton
                    on:click={() => changeDelay(delay)}
                    {delay}
                    currentDelay={$data.misc.delay}
                />
            {/each}
        </div>
    </div>
</div>

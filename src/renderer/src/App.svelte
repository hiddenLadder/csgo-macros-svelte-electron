<script>
  import Header from "./lib/components/Header.svelte";
  import Misc from "./lib/components/Misc.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  import Drawer from "./lib/components/Drawer.svelte";
  import MiscOptions from "./lib/components/MiscOptions.svelte";
  import WeaponItemList from "./lib/components/WeaponItemList.svelte";
  import { loadFrom, makeFastzoom, TABS } from "./lib/utils";
  import { onMount } from "svelte";
  import { currentActiveWeapon, data, noRecoilState } from "./lib/stores";

  const keycodes = loadFrom("keycodes.json");
  const sprays = loadFrom("sprays.json");
  let currentTab = TABS.SMG;
  let showDrawer = false;
  let mouseDown = false;
  let counter = 0;
  let modifier = 0;
  let timer = null;

  function toggleNoRecoilState() {
    if ($data.misc.sound) {
      let audio = $noRecoilState
        ? new Audio(
            window.api.path.join(
              window.api.__dirname,
              "renderer/src/lib/sounds/turnOff.wav"
            )
          )
        : new Audio(
            window.api.path.join(
              window.api.__dirname,
              "renderer/src/lib/sounds/turnOn.wav"
            )
          );
      audio.volume = 0.05;
      audio.play();
    }
    $noRecoilState = !$noRecoilState;
  }

  function handler(e) {
    if (keycodes[e.keycode] === $data.misc.noRecoil.key) {
      toggleNoRecoilState();
    } else if (keycodes[e.keycode] === $data.misc.resetActiveWeapon.key) {
      $currentActiveWeapon = null;
    } else if (keycodes[e.keycode] === "Alt") {
      if ($data.misc.fastzoom) {
        makeFastzoom($data.misc.delay);
      }
    } else {
      $data.weapons.forEach((item) => {
        if (keycodes[e.keycode] === item.key) {
          $currentActiveWeapon = item.name;
          return;
        }
      });
    }
  }

  function controlSpray(e) {
    if ($noRecoilState && $currentActiveWeapon !== null) {
      mouseDown = true;
      timer = setInterval(() => {
        if (mouseDown) {
          window.api.robot.moveMouseRelative(
            parseInt(sprays[$currentActiveWeapon][counter][0] * modifier),
            parseInt(sprays[$currentActiveWeapon][counter][1] * modifier)
          );
          counter++;
          if (counter === 29) {
            clearTimeout(timer);
          }
        }
      }, 99);
    }
  }
  function stopControllingSpray(e) {
    clearTimeout(timer);
    mouseDown = false;
    counter = 0;
  }

  onMount(() => {
    modifier = 2.52 / +$data.misc.sensitive;
    window.api.on("keydown", handler);
    window.api.on("mousedown", controlSpray);
    window.api.on("mouseup", stopControllingSpray);
    window.api.start();
    return () => window.api.stop();
  });
</script>

<Header />
<main>
  <Navbar bind:currentTab />
  <div class="flex p-3 flex-wrap gap-6">
    <svelte:component
      this={currentTab === TABS.SMG || currentTab === TABS.RIFLES
        ? WeaponItemList
        : Misc}
      {currentTab}
    />
  </div>
</main>
<Drawer bind:show={showDrawer}>
  <MiscOptions />
  <button
    on:click={() => (showDrawer = false)}
    class="w-28 absolute bottom-3 left-3 border-2 border-rose-500 rounded-full px-6 py-2 text-rose-500 uppercase hover:bg-rose-500 hover:text-white active:bg-rose-900 active:text-white active:border-rose-900 transition-all duration-150 ease-in-out"
  >
    ок
  </button>
</Drawer>
<button
  on:click={() => (showDrawer = true)}
  class="p-3 rounded-lg shadow fixed z-10 right-2 bottom-2 bg-primary text-sm font-medium uppercase tracking-widest text-gray-500 transition-all delay-75 duration-150 hover:text-white hover:-translate-y-1"
>
  <i class="fa-solid fa-gear" />
  настройки
</button>

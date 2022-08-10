<script>
    export let name;
    export let checked;
</script>

<label
    class="flex relative justify-between items-center group p-2 text-xl"
    for={name}
>
    <input
        type="checkbox"
        class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        id={name}
        on:change
        {checked}
    />
    <span
        class="w-14 h-6 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-rose-500 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-8 group-hover:after:translate-x-1"
    />
</label>

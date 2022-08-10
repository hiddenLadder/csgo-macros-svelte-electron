import { writable } from "svelte/store";

export const currentActiveWeapon = writable(null)
export const noRecoilState = writable(false)
export const isBeingChanged = writable(null)
export const data = writable({})
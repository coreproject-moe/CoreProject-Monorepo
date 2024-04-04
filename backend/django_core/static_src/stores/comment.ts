import { persist, createIndexedDBStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"
// `url` regex pattern to clear `commentbox_value`
const whitelisted_regexs = [/^\/anime\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+/gm];

export const commentbox_value = persist(writable<string>("commentbox"),createIndexedDBStorage(), 'commentbox-value');

export function clear_commentbox_if_needed() {
    const matches_string = whitelisted_regexs.some((regex) => {
        return regex.test(window.location.pathname);
    });

    if (!matches_string) {
        commentbox_value.set("");
    }
}

<script lang="ts">
    import { ComponentType } from "svelte";

    // Forms
    let form_first = import("./Forms/1.svelte");
    let form_second = import("./Forms/2.svelte");
    let form_third = import("./Forms/3.svelte");

    let pages = [form_first, form_second, form_third];
    // current page
    let page = 0;

    // The state of all of our pages
    let pages_state: { [key: number]: Record<string, string | number> } = [];

    // Our handlers
    function goToPage(e: CustomEvent) {
        page = e.detail.page;
    }

    function handleSubmit(e: CustomEvent) {
        if (page === pages.length - 1) {
            // end of the page. do something.. Maybe seek for anime girls with stockings and leggings
            // XD
            console.log("ho ho ho, Wheres my anime girl?");
        } else {
            // If we're not on the last page, store our data and increase a step
            pages_state[page] = e.detail;
            page += 1;
        }
    }

    // Do some wizardy here later
    // https://github.com/sveltejs/language-tools/issues/486#issuecomment-1372330560
    let current_page: Promise<{ default: ComponentType }>;

    $: current_page = pages[page];
</script>

<!-- We display the current step here -->
<!-- We do not need skeleton loader or anything, since this is not hydratable -->
{#await current_page then Module}
    <svelte:component
        this={Module.default}
        on:go_to_page={goToPage}
        on:submit={handleSubmit}
        {pages_state}
        {page}
    />
{/await}

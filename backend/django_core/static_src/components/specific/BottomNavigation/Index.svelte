<script>
    import {  reverse } from "$functions/urls";
    import { url } from "$stores/url";

    // Icons
    import Home from "$icons/Home/Index.svelte";
    import Compass from "$icons/Compass/Index.svelte";
    import Chat from "$icons/Chat/Index.svelte";
    import { enhance_anchor } from "$functions/anchor_enhancements";

    const mapping = [
        {
            icon: Home,
            name: "home",
            href: "/anime/",
            url: reverse("anime_home_view")
        },
        {
            icon: Compass,
            name: "explore",
            href: "/anime/explore/",
            url: reverse("anime_explore_view")
        },
        {
            icon: Chat,
            name: "forum",
            href: "/forum",
            url: ""
        }
    ];
</script>

<footer class="flex h-24 items-center justify-center gap-3 md:hidden">
    {#each mapping as item}
        {@const is_active = item.href === $url}

        <a
            href={item.url}
            use:enhance_anchor={{ verb: "GET", target: "#page" }}
            type="button"
            class="flex flex-col items-center gap-[0.5vh] leading-none"
        >
            <div
                class="btn h-12 w-20 rounded-xl text-accent"
                class:btn-primary={is_active}
                class:btn-secondary={!is_active}
            >
                <svelte:component
                    this={item.icon}
                    class="w-5"
                />
            </div>
            <span class="text-sm font-bold capitalize">{item.name}</span>
        </a>
    {/each}
</footer>

<script lang="ts">
    import { cn } from "$functions/classname";

    let klass = "";
    export { klass as class };
    export let style = "";
</script>

<p
    class={cn(klass, "inline-flex")}
    {style}
>
    <span class="text-white/90">c</span>
    <span class="text-warning">o</span>
    <span class="text-white/90">r</span>
    <span class="text-white/90">e</span>
</p>

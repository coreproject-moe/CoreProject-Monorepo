<script lang="ts">
    let klass = "";
    export { klass as class };
    export let style = "";
</script>

<svg
    class={klass}
    {style}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g filter="url(#filter0_d_1911_2848)">
        <path
            d="M15.5 3L10.75 7.75L8.25 5.25L4.5 9"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
        <path
            d="M12.5 3H15.5V6"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </g>
    <defs>
        <filter
            id="filter0_d_1911_2848"
            x="0"
            y="0"
            width="20"
            height="20"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
        >
            <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
            ></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
                in2="hardAlpha"
                operator="out"
            ></feComposite>
            <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            ></feColorMatrix>
            <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1911_2848"
            ></feBlend>
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1911_2848"
                result="shape"
            ></feBlend>
        </filter>
    </defs>
</svg>

<script lang="ts">
    /**
     * the name of the tag
    */
    export let name: string;

    /**
     * the color of the tag
    */
    export let color: string;

    /**
     * if the viewer is the author of the post with the tag
     */
    export let isAuthor: boolean;
</script>

<div class="bg-{color}">
    <span style="color: white">{name}</span>
    {#if isAuthor}
        <button>X</button>
    {/if}
</div> <!-- we gotta style this later -->
<!-- does daisyui work here? -->


<!-- https://yqnn.github.io/svg-path-editor/ -->


<script lang="ts">
  import { setIcon } from "./icon";
  import { scale } from "svelte/transition";

  let {
    name,
    size = 16,
    className = ""
  }: {
    name: string;
    size?: number;
    className?: string;
  } = $props();

  // Lookup icon from the single configured icon set
  let iconItem = $derived(setIcon(name));
</script>

{#if iconItem}
  {#key name}
    <span
      class="center icon {className}"
      style="--size: {size}px;"
      role="img"
      aria-label={name}
      in:scale={{ duration: 140, start: 0.8 }}
    >
      {@html iconItem}
    </span>
  {/key}
{/if}

<style>
  .icon {
    width: var(--size);
    height: var(--size);
    color: inherit;
    display: inline-flex;
    flex-shrink: 0;
  }

  /* Ensure icon svg scales correctly and takes up the full bounds of the viewbox */
  .icon :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
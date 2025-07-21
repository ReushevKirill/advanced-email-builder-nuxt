<script setup lang="ts">
import { useDroppable } from '@vue-dnd-kit/core'

const emit = defineEmits<{
  (e: 'drop',): void
}>()

const { elementRef, isOvered } = useDroppable({
  events: { onDrop: () => emit('drop') },
})
</script>

<template>
  <div
    ref="elementRef"
    class="droppable" :class="{
      'is-overed': isOvered,
    }"
    role="region"
    aria-dropeffect="move"
  >
    <slot />
  </div>
</template>

<style scoped>
  .droppable {
  border: 1px solid black;
}
.is-overed {
  background-color: #f0f0f0;
  border: 1px dashed red;
}
</style>

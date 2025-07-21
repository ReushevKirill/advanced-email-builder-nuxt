<script setup lang="ts">
import { useDraggable } from '@vue-dnd-kit/core'

const emit = defineEmits<{
  (e: 'end'): void
  (e: 'start'): void
}>()

function onEndHandler() {
  emit('end')
}

function onStartHandler() {
  emit('start', elementRef)
}

const { elementRef, handleDragStart, isDragging } = useDraggable({
  events: { onEnd: () => onEndHandler(), onStart: () => onStartHandler() },
})
</script>

<template>
  <div
    ref="elementRef"
    :class="{ dragging: isDragging }"
    tabindex="0"
    role="button"
    aria-grabbed="false"
    :aria-pressed="isDragging"
    @pointerdown="handleDragStart"
  >
    <slot />
  </div>
</template>

<style scoped>
  .dragging {
  opacity: 0.5;
}
</style>

<script setup lang="ts">
import type { NodeRef } from '~/types'
import { useDraggable } from '@vue-dnd-kit/core'

const emit = defineEmits<{
  (e: 'end'): void
  (e: 'start', el: NodeRef): void
  (e: 'leave', el: NodeRef): void
}>()

const { elementRef, handleDragStart, isDragging } = useDraggable({
  events: { onEnd: () => onEndHandler(), onStart: () => onStartHandler(), onLeave: () => onLeaveHandler },
})

function onEndHandler() {
  console.log('end')
  emit('end')
}

function onLeaveHandler() {
  console.log('leave')
  emit('end')
}

function onStartHandler() {
  emit('start', elementRef)
}
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

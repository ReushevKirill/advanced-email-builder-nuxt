<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { useDroppable } from '@vue-dnd-kit/core'
import { DND_GROUPS } from '../types'
import { handleDropCanvas } from '../utils/handlers'

const { blocks, layout } = useBuilderState()

const { elementRef, isOvered } = useDroppable({
  data: computed(() => ({
    blocks,
  })),
  groups: [DND_GROUPS.BLOCKS],
  events: {
    onDrop: (store, payload) => {
      handleDropCanvas(store, payload)
    },
  },
})

const styles = computed<CSSProperties>(() => ({
  backgroundColor: layout.value?.props.backgroundColor ?? '#ffffff',
  width: `${layout.value?.props.width ?? 800}px`,
  margin: '0 auto',
  paddingInline: '1rem',
}))
</script>

<template>
  <div
    v-if="layout"
    ref="elementRef"
    :style="styles"
    class="py-4 shadow-lg"
    :class="{ 'is-overed': isOvered }"
  >
    <BlockRenderer
      v-for="block in blocks"
      :key="block.id"
      :block="block"
      :class="{ 'mb-2': blocks.length > 0 }"
    />
  </div>
  <div v-else class="text-center text-gray-500">
    Загрузка макета...
  </div>
</template>

<style>
.is-overed {
  background-color: #f0f0f0 !important;
}
</style>

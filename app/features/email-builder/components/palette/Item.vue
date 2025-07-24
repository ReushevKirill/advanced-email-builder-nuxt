<script lang="ts" setup>
import type { PaletteItem } from '../../types'
import { useDraggable } from '@vue-dnd-kit/core'
import { DND_GROUPS } from '../../types'

const { item } = defineProps<{
  item: PaletteItem
}>()

const { elementRef, handleDragStart } = useDraggable({
  groups: [DND_GROUPS.BLOCKS],
  data: computed(() => ({
    type: item.type,
  })),
})

const itemClass = 'flex cursor-move flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-blue-500 hover:bg-gray-100'
</script>

<template>
  <div ref="elementRef" :class="itemClass" @pointerdown="handleDragStart">
    <Icon :name="item.icon" class="mb-2 h-8 w-8 text-gray-600" />
    <span class="text-sm text-gray-700">{{ item.label }}</span>
  </div>
</template>

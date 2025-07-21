<script lang="ts" setup>
import type { PaletteItem } from '../../types'

const props = defineProps<{
  item: PaletteItem
}>()

const itemClass = 'flex cursor-grab flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-blue-500 hover:bg-gray-100'
</script>

<template>
  <div :class="itemClass">
    <Icon :name="props.item.icon" class="mb-2 h-8 w-8 text-gray-600" />
    <span class="text-sm text-gray-700">{{ props.item.label }}</span>
  </div>
</template>

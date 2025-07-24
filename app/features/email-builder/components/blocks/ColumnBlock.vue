<script lang="ts" setup>
import type { ColumnBlock } from '../../types'
import { useDroppable } from '@vue-dnd-kit/core'
import { DND_GROUPS } from '../../types'
import { handleDropColumn } from '../../utils/handlers'

const { children } = defineProps<ColumnBlock>()

const { elementRef, isOvered } = useDroppable({
  data: computed(() => ({
    childs: children,
  })),
  groups: [DND_GROUPS.BLOCKS],
  events: {
    onDrop: (store, payload) => {
      handleDropColumn(store, payload, children)
    },
  },
})
</script>

<template>
  <div
    ref="elementRef"
    class="column-container flex-column gap-4 border p-2"
    :class="{
      'py-4': !children.length,
      'is-overed': isOvered,
    }"
  >
    <div v-for="child in children" :key="`child-${child.id}`" class="flex-1">
      <BlockRenderer :block="child" :class="{ 'mb-2': children.length > 0 }" />
    </div>
  </div>
</template>

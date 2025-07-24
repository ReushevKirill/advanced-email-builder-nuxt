<script lang="ts" setup>
import type { BlockType, EmailBlock } from '../types'
import { BLOCK_TYPES } from '../types'

import ButtonBlock from './blocks/ButtonBlock.vue'
import ColumnBlock from './blocks/ColumnBlock.vue'
import ImageBlock from './blocks/ImageBlock.vue'
import TextBlock from './blocks/TextBlock.vue'

const { block } = defineProps<{
  block: EmailBlock
}>()

const blocksMap: Record<BlockType, Component> = {
  [BLOCK_TYPES.TEXT]: TextBlock,
  [BLOCK_TYPES.IMAGE]: ImageBlock,
  [BLOCK_TYPES.BUTTON]: ButtonBlock,
  [BLOCK_TYPES.COLUMN]: ColumnBlock,
}
</script>

<template>
  <component :is="blocksMap[block.type]" v-bind="block" />
</template>

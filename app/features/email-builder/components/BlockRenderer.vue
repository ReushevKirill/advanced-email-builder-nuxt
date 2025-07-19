<script lang="ts" setup>
import type { BlockType, EmailBlock } from '../types';
import { BLOCK_TYPES } from '../types';

// Импортируем компоненты статически. Это проще и надежнее для нашего случая.
import TextBlock from './blocks/TextBlock.vue';
import ImageBlock from './blocks/ImageBlock.vue';
import ButtonBlock from './blocks/ButtonBlock.vue';
import ColumnBlock from './blocks/ColumnBlock.vue';

const props = defineProps<{
  block: EmailBlock
}>();

const blocksMap: Record<BlockType, Component> = {
  [BLOCK_TYPES.TEXT]: TextBlock,
  [BLOCK_TYPES.IMAGE]: ImageBlock,
  [BLOCK_TYPES.BUTTON]: ButtonBlock,
  [BLOCK_TYPES.COLUMN]: ColumnBlock,
};
</script>

<template>
  <component :is="blocksMap[props.block.type]" v-bind="props.block" />
</template>

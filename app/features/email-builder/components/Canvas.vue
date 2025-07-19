<script lang="ts" setup>
import type { EmailLayout } from '../types';

const props = defineProps<{
  layout: EmailLayout
}>();

const styles = computed(() => ({
  backgroundColor: props.layout.props.backgroundColor,
  width: `${props.layout.props.width}px`,
  margin: '0 auto',
}));
</script>

<template>
  <div :style="styles" class="p-4 shadow-lg">
    <template v-for="block in props.layout.blocks" :key="block.id">
      <BlockRenderer :block="block" />
    </template>
  </div>
</template>

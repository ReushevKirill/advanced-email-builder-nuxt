<script lang="ts" setup>
import type { ColumnBlock } from '../../types';

const props = defineProps<ColumnBlock>();
</script>

<template>
  <div class="column-container flex gap-4">
    <div v-for="childBlock in props.children" :key="childBlock.id" class="flex-1">
      <BlockRenderer :block="childBlock" />
    </div>
  </div>
</template>

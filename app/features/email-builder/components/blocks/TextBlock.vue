<script lang="ts" setup>
import type { TextBlock } from '../../types';

const props = defineProps<TextBlock>();

const styles = computed(() => ({
  color: props.props.color,
  fontSize: `${props.props.fontSize}px`,
}));
</script>

<template>
  <div :style="styles">
    {{ props.props.content }}
  </div>
</template>

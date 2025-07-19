<script lang="ts" setup>
import type { ImageBlock } from '../../types';

  const props = defineProps<ImageBlock>()
</script>

<template>
  <img :src="props.props.src" :alt="props.props.alt">
</template>

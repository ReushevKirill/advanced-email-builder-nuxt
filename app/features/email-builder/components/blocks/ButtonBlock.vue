<script lang="ts" setup>
import type { ButtonBlock } from '../../types';

  const props = defineProps<ButtonBlock>()
</script>

<template>
  <a :href="props.props.url" target="_blank">
    {{ props.props.text }}
  </a>
</template>

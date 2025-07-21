<script lang="ts" setup>
import type { EmailLayout } from '~/features/email-builder/types'
import { BLOCK_TYPES } from '~/features/email-builder/types'

const layout: EmailLayout = {
  id: '1',
  props: {
    backgroundColor: '#f3f4f6',
    contentBackgroundColor: '#ffffff',
    width: 800,
  },
  blocks: [
    {
      id: 'textBlock-1',
      type: BLOCK_TYPES.TEXT,
      props: {
        content: 'Это пример текстового блока. Перетащите сюда новые блоки!',
        fontSize: 16,
        color: '#333333',
      },
    },
  ],
}

function handleDrop() {
  console.log('drop')
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <Palette />
    <main class="flex-1 overflow-auto p-8">
      <Droppable @drop="handleDrop">
        <Canvas :layout="layout" />
      </Droppable>
    </main>
  </div>
</template>

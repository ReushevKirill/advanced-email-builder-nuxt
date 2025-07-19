<script lang="ts" setup>
</script>

<template>
  <aside class="w-64 bg-gray-50 border-r border-gray-200 p-4">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Блоки</h2>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="item in PALETTE_CONFIG"
        :key="item.type"
        class="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg cursor-grab hover:bg-gray-100 hover:border-blue-500 transition-colors"
      >
        <Icon :name="item.icon" class="w-8 h-8 text-gray-600 mb-2" />
        <span class="text-sm text-gray-700">{{ item.label }}</span>
      </div>
    </div>
  </aside>
</template>

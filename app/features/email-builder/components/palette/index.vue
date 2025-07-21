<script lang="ts" setup>
  const store = useEmailBuilderStore()

const onStartHandler = (element) => {
  console.log(element.value.dataset.blockType) 
}
</script>

<template>
  <aside class="w-64 border-r border-gray-200 bg-gray-50 p-4">
    <h2 class="mb-4 text-lg font-semibold text-gray-700">
      Блоки
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <Draggable
        @start="onStartHandler"
        v-for="item in PALETTE_CONFIG"
        :key="item.type"
        :data-block-type="item.type"
      >
        <PaletteItem
          :item="item"
        />
      </Draggable>
    </div>
  </aside>
</template>

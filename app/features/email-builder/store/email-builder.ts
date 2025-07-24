import type { EmailBlock, EmailLayout } from '../types'

export const useEmailBuilderStore = defineStore('email-builder', () => {
  const layout = ref<EmailLayout | null>(null)

  const blocks = computed(() => layout.value?.blocks ?? [])

  function initializeLayout(initialLayout: EmailLayout) {
    layout.value = initialLayout
  }

  function addBlock(newBlock: EmailBlock) {
    if (!layout.value)
      return
    layout.value.blocks.push(newBlock)
  }

  return {
    layout,
    blocks,
    initializeLayout,
    addBlock,
  }
})

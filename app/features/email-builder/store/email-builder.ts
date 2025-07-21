import type { BlockType } from '../types'
import { defineStore } from 'pinia'

const useEmailBuilderStore = defineStore('email-builder', () => {
  const draggableEl = ref<BlockType | ''>('')

  function setDraggableEl(el: BlockType | '') {
    draggableEl.value = el
  }

  return {
    draggableEl,
    setDraggableEl,
  }
})

export {useEmailBuilderStore}

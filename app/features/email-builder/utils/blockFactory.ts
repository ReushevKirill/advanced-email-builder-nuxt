import type { BlockType, ButtonBlock, ColumnBlock, EmailBlock, ImageBlock, TextBlock } from '../types'
import { BLOCK_TYPES } from '../types'

function createTextBlock(): TextBlock {
  return {
    id: useId(),
    type: BLOCK_TYPES.TEXT,
    props: {
      color: '',
      content: 'Текстовый блок',
      fontSize: 16,
    },
  }
}

function createButtonBlock(): ButtonBlock {
  return {
    id: useId(),
    type: BLOCK_TYPES.BUTTON,
    props: {
      text: 'Это кнопка',
      url: '/',
    },
  }
}

function createImageBlock(): ImageBlock {
  return {
    id: useId(),
    type: BLOCK_TYPES.IMAGE,
    props: {
      alt: 'Image Alt',
      src: '',
    },
  }
}

function createColumnBlock(): ColumnBlock {
  return {
    id: useId(),
    type: BLOCK_TYPES.COLUMN,
    props: {
      backgroundColor: '',
      padding: 0,
    },
    children: [],
  }
}

function hasType(type: BlockType) {
  return Object.values(BLOCK_TYPES).includes(type)
}

const createBlocksMap: Record<BlockType, () => EmailBlock> = {
  [BLOCK_TYPES.TEXT]: () => createTextBlock(),
  [BLOCK_TYPES.IMAGE]: () => createImageBlock(),
  [BLOCK_TYPES.BUTTON]: () => createButtonBlock(),
  [BLOCK_TYPES.COLUMN]: () => createColumnBlock(),
}

function createBlock(type: BlockType): EmailBlock | undefined {
  if (!hasType(type))
    return undefined

  return createBlocksMap[type]()
}

export { createBlock }

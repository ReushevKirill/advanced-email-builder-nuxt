import type { IDnDPayload, IDnDStore } from '@vue-dnd-kit/core'
import type { ColumnBlock, EmailBlock } from '../types'
import { createEmailBlock } from './blockFactory'

export function handleDropCanvas(store: IDnDStore, payload: IDnDPayload) {
  const itemType = payload.items[0]?.data?.type

  if (!itemType) {
    console.error('Dropped item has no type!')
    return
  }

  const newBlock = createEmailBlock(itemType)

  if (!newBlock) {
    console.error(`Failed to create block of type: ${itemType}`)
    return
  }

  const { addBlock } = useEmailBuilderStore()
  addBlock(newBlock)
}

export function handleDropColumn(
  store: IDnDStore,
  payload: IDnDPayload,
  childs: EmailBlock[],
) {
  const [item] = payload.items
  const itemType = item?.data?.type

  if (!itemType) {
    console.error('Dropped item has no type!')
    return
  }

  const newBlock = createEmailBlock(itemType)

  if (!newBlock) {
    console.error(`Failed to create block of type: ${itemType}`)
    return
  }

  childs.push(newBlock)
}

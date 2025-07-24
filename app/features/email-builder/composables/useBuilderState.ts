export function useBuilderState() {
  const builderStore = useEmailBuilderStore()
  const { blocks, layout } = storeToRefs(builderStore)

  return {
    layout,
    blocks,
    builderStore,
  }
}

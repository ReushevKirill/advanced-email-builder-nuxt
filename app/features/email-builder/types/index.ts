/**
 * Константы для типов блоков.
 */
export const BLOCK_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  BUTTON: 'button',
  COLUMN: 'column',
} as const

type BlockTypes = typeof BLOCK_TYPES

export type BlockType = (typeof BLOCK_TYPES)[keyof typeof BLOCK_TYPES]

/**
 * Базовый интерфейс для ВСЕХ блоков.
 * Каждый блок в нашей системе должен иметь эти поля.
 */
export interface BaseBlock {
  readonly id: string
  readonly type: BlockType
}

/**
 * Блок с текстом
 * Мы "дискриминируем" его, указывая конкретный type: 'text'.
 */
export interface TextBlock extends BaseBlock {
  type: BlockTypes['TEXT']
  props: {
    content: string
    fontSize: number
    color: string
  }
}

/**
 * Блок с изображением.
 */
export interface ImageBlock extends BaseBlock {
  type: BlockTypes['IMAGE']
  props: {
    src: string
    alt: string
  }
}

/**
 * Блок-кнопка.
 */
export interface ButtonBlock extends BaseBlock {
  type: BlockTypes['BUTTON']
  props: {
    text: string
    url: string
  }
}

/**
 * Блок-контейнер (колонка). Может содержать другие блоки.
 */
export interface ColumnBlock extends BaseBlock {
  type: BlockTypes['COLUMN']
  children: EmailBlock[]
  props: {
    padding: number
    backgroundColor: string
  }
}

export type EmailBlock = TextBlock | ImageBlock | ButtonBlock | ColumnBlock

/**
 * Корневая структура всего email-шаблона.
 * Содержит глобальные настройки и массив блоков верхнего уровня.
 */
export interface EmailLayout {
  id: string
  props: {
    backgroundColor: string
    contentBackgroundColor: string
    width: number
  }
  blocks: EmailBlock[]
}

export interface PaletteItem {
  type: BlockType
  label: string
  icon: string
}

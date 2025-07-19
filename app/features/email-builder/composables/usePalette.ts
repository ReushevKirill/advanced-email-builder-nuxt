import type { PaletteItem } from '../types';
import { BLOCK_TYPES } from '../types';

export const PALETTE_CONFIG: PaletteItem[] = [
  {
    type: BLOCK_TYPES.TEXT,
    label: 'Текст',
    icon: 'mdi:format-text',
  },
  {
    type: BLOCK_TYPES.IMAGE,
    label: 'Изображение',
    icon: 'mdi:image-outline',
  },
  {
    type: BLOCK_TYPES.BUTTON,
    label: 'Кнопка',
    icon: 'mdi:gesture-tap-button',
  },
  {
    type: BLOCK_TYPES.COLUMN,
    label: 'Колонки',
    icon: 'mdi:view-column-outline',
  },
];

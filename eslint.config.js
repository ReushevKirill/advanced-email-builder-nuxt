import antfu from '@antfu/eslint-config'
import tailwindPlugin from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    vue: true,
    typescript: true,
    unocss: false,
    formatters: true,
  },
  {
    plugins: {
      tailwindcss: tailwindPlugin,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
      'no-useless-return': 'off',
    },
  },
)

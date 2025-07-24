import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

// Путь к нашей директории с фичами
const featuresPath = resolve(__dirname, 'app/features')

// Находим все директории внутри /features
const featureDirs = readdirSync(featuresPath).filter(file =>
  statSync(resolve(featuresPath, file)).isDirectory(),
)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    ...featureDirs.map(feature => ({
      path: `~/features/${feature}/components`,
      pathPrefix: true,
    })),
  ],
  imports: {
    dirs: [
      'composables',
      'store',
      ...featureDirs.flatMap(feature => [
        `features/${feature}/composables`,
        `features/${feature}/store`,
        `features/${feature}/utils`,
      ]),
    ],
  },
})

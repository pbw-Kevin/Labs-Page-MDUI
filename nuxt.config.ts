// https://nuxt.com/docs/api/configuration/nuxt-config
import { default as repos, repoTags } from './app/assets/repos'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('mdui-')
    }
  },
  nitro: {
    prerender: {
      routes: repos
        .map(repo => {return `/repos/${repo.id}`})
        .concat(repoTags.map((tag) => {
          return `/tags/${tag}`
        })),
    }
  }
})

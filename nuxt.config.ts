// https://nuxt.com/docs/api/configuration/nuxt-config
import { default as repos, repoTags } from './app/assets/repos'
import config from './app/assets/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  site: {
    url: config.url,
    name: config.title
  },

  sitemap: {
    zeroRuntime: true
  },

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
        }))
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/mdui@2/mdui.css'
        }
      ],
      script: [
        {
          src: 'https://unpkg.com/mdui@2/mdui.global.js',
          onerror: 'window.mduiLoadError = true;',
          async: true
        }
      ]
    }
  },

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots']
})
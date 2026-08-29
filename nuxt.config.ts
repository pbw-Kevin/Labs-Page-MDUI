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

  vite: {
    define: {
      'process.env.VITE_BUILD_DATE': JSON.stringify((function curdate() {
        const now = new Date();
      
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      })())
    }
  },

  nitro: {
    prerender: {
      routes: repos
        .map(repo => {return `/repos/${repo.id}`})
        .concat(repoTags.map((tag) => {
          return `/tags/${tag}`
        }))
    },
    rollupConfig: {
      onwarn: (warning, warn) => {
        if (['UNRESOLVED_IMPORT', 'CIRCULAR_DEPENDENCY', 'UNUSED_EXTERNAL_IMPORT'].includes(warning.code || '')) {
          return
        } else {
          warn(warning)
        }
      }
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/mdui@2.1.5/mdui.css'
        }
      ],
      script: [
        {
          src: 'https://unpkg.com/mdui@2.1.5/mdui.global.js',
          onerror: 'window.mduiLoadError = true;',
          async: true
        }
      ]
    }
  },

  colorMode: {
    preference: config.theme == 'auto' ? 'system' : config.theme,
    fallback: 'light',
    classPrefix: 'mdui-theme-',
    storage: 'cookie',
    storageKey: 'theme',
    cookieAttrs: {
      maxAge: 2592000,
      path: '/'
    }
  },

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/color-mode']
})
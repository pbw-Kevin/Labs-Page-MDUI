declare global {
  interface Window {
    mdui: any
    mduiLoadError: boolean
  }
}

var mdui: any = null
import Cookies from 'js-cookie'
import config from './config'

export var labLoaded = ref(false)
export var labError = ref(false)

const colorScheme = config.colorScheme
const theme = config.theme

export var realTheme = ref('' as 'light' | 'dark')
export var themeSwitchHover = ref(false)
var themeMedia: MediaQueryList

export var isSmallDevice = ref(false)

function setThemeCssVars(theme: 'light' | 'dark') {
  const cssVars = [
    'link',
    'link-hover',
    'status-stable',
    'status-unstable',
    'status-unknown'
  ]
  cssVars.forEach((cssVar) => {
    document.documentElement.style.setProperty('--mdui-color-' + cssVar, 'var(--mdui-color-' + cssVar + '-' + theme + ')')
  })
}

export async function init() {
  if (window.mdui) {
    mdui = window.mdui
  } else {
    if (await new Promise((resolve) => {
      var mduiLoadInterval = setInterval(() => {
        if (window.mdui) {
          mdui = window.mdui
          clearInterval(mduiLoadInterval)
          resolve(false)
        } else if (window.mduiLoadError) {
          labError.value = true
          clearInterval(mduiLoadInterval)
          resolve(true)
        }
      }, 100)
    })) return
  }
  isSmallDevice.value = window.innerWidth < 470
  mdui.observeResize(document.body, function (entry: any) {
    isSmallDevice.value = ( entry.borderBoxSize[0]?.inlineSize || 1000 ) < 470
  })
  mdui.setColorScheme(colorScheme)
  mdui.setTheme(theme)
  themeMedia = window.matchMedia("(prefers-color-scheme: dark)")
  themeMedia.addEventListener("change", (event) => {
    if(mdui.getTheme() == 'auto'){
      if (event.matches) {
        realTheme.value = 'dark'
        setThemeCssVars('dark')
      } else {
        realTheme.value = 'light'
        setThemeCssVars('light')
      }
    }
  })
  var cookieTheme = Cookies.get('theme')
  if(cookieTheme) {
    if(cookieTheme == 'dark') {
      mdui.setTheme('dark')
      setThemeCssVars('dark')
    }
    else {
      mdui.setTheme('light')
      setThemeCssVars('light')
    }
  }
  realTheme.value = getRealTheme()
  setThemeCssVars(realTheme.value)
  autoToggleNavBar()
  labLoaded.value = true
}

export function getRealTheme() : 'light' | 'dark' {
  var curTheme = mdui.getTheme()
  if(curTheme == 'auto') {
    return themeMedia.matches ? 'dark' : 'light'
  }
  else return curTheme
}

export function changeTheme() {
  if(realTheme.value == 'light') {
    realTheme.value = 'dark'
    mdui.setTheme('dark')
    setThemeCssVars('dark')
    Cookies.set('theme', 'dark', {expires: 30})
  }
  else if(realTheme.value == 'dark') {
    realTheme.value = 'light'
    mdui.setTheme('light')
    setThemeCssVars('light')
    Cookies.set('theme', 'light', {expires: 30})
  }
}

export var toggleNavBar = ref(false)

export function autoToggleNavBar() {
  toggleNavBar.value = mdui.breakpoint().up('md')
}

export type Repo = {
  id: string
  briefIntro: string
  intro: string
  owner: string
  version: string
  createdAt: string
  modifiedAt: string
  tags: string[]
  status: string
  links: {
      name: string
      url: string
      target?: string
  }[]
}

export type Config = {
  colorScheme: string
  theme: 'light' | 'dark' | 'auto'
  url: string
  title: string
  titleDelimiter: string
  subtitles: {
    text: string
    href: string
  }[]
  repos: Repo[]
  about: string
  bottom: string
}

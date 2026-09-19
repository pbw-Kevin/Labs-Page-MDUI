import config from './config'

type Theme = 'light' | 'dark' | 'auto'

type Mdui = {
  observeResize: (element: HTMLElement, callback?: (entry: ResizeObserverEntry, observer: {
    unobserve: () => void
  }) => void) => {
    unobserve: () => void
  }
  setColorScheme: (color: string) => void
  breakpoint: () => {
    up: (breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl') => boolean
  }
}

declare global {
  interface Window {
    mdui: Mdui | undefined
    mduiLoadError: boolean
  }
}

var mdui: Mdui | undefined = undefined

export const labLoaded = ref(false)
export const labError = ref(false)

export const isSmallDevice = ref(false)
export const isUpMd = ref(true)

async function getMdui() : Promise<Mdui | undefined> {
  return new Promise((resolve) => {
    if (window.mdui) {
      resolve(window.mdui)
      return
    }
    
    var mduiLoadInterval = setInterval(() => {
      if (window.mdui) {
        clearInterval(mduiLoadInterval)
        resolve(window.mdui)
      } else if (window.mduiLoadError) {
        clearInterval(mduiLoadInterval)
        resolve(undefined)
      }
    }, 100)
  })
}

function registerSizeObserver() {
  if (!mdui) return

  isSmallDevice.value = window.innerWidth < 470
  isUpMd.value = mdui.breakpoint().up('md')

  mdui.observeResize(document.body, function (entry) {
    isSmallDevice.value = ( entry.borderBoxSize[0]?.inlineSize || 1000 ) < 470
    isUpMd.value = mdui ? mdui.breakpoint().up('md') : true
  })
}

export async function init() {
  mdui = await getMdui()
  if (!mdui) {
    labError.value = true
    return
  }

  registerSizeObserver()

  mdui.setColorScheme(config.colorScheme)

  autoToggleNavBar()
  labLoaded.value = true
}

export const toggleNavBar = ref(false)

export function autoToggleNavBar() {
  toggleNavBar.value = isUpMd.value
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
  theme: Theme
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

import { getTheme, setColorScheme, setTheme, observeResize } from 'mdui'
import Cookies from 'js-cookie'

const colorScheme = "#62DFFE"
const theme = 'auto'

export var realTheme = ref('' as 'light' | 'dark')
export var themeSwitchHover = ref(false)
var themeMedia: MediaQueryList;

export var isSmallDevice = ref(false)

function setThemeCssVars(theme: 'light' | 'dark') {
  const cssVars = [
    'link',
    'link-hover',
    'status-stable',
    'status-unstable',
    'status-unknown',
  ]
  cssVars.forEach((cssVar) => {
    document.documentElement.style.setProperty('--mdui-color-' + cssVar, 'var(--mdui-color-' + cssVar + '-' + theme + ')')
  });
}

export function init() {
  isSmallDevice.value = window.innerWidth < 470
  observeResize(document.body, function (entry, observer) {
    isSmallDevice.value = ( entry.borderBoxSize[0]?.inlineSize || 1000 ) < 470
  })
  setColorScheme(colorScheme)
  setTheme(theme)
  themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  themeMedia.addEventListener("change", (event) => {
    if(getTheme() == 'auto'){
      if (event.matches) {
        realTheme.value = 'dark'
        setThemeCssVars('dark')
      } else {
        realTheme.value = 'light'
        setThemeCssVars('light')
      }
    }
  });
  var cookieTheme = Cookies.get('theme');
  if(cookieTheme) {
    if(cookieTheme == 'dark') {
      setTheme('dark')
      setThemeCssVars('dark')
    }
    else {
      setTheme('light')
      setThemeCssVars('light')
    }
  }
  realTheme.value = getRealTheme()
  setThemeCssVars(realTheme.value)
}

export function getRealTheme() : 'light' | 'dark' {
  var curTheme = getTheme()
  if(curTheme == 'auto') {
    return themeMedia.matches ? 'dark' : 'light'
  }
  else return curTheme
}

export function changeTheme() {
  if(realTheme.value == 'light') {
    realTheme.value = 'dark'
    setTheme('dark')
    setThemeCssVars('dark')
    Cookies.set('theme', 'dark', {expires: 30})
  }
  else if(realTheme.value == 'dark') {
    realTheme.value = 'light'
    setTheme('light')
    setThemeCssVars('light')
    Cookies.set('theme', 'light', {expires: 30})
  }
}

export var toggleNavBar = ref(false)

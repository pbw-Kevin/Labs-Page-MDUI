import config from './config'
import type { Repo } from './main'

const unique = (arr: Array<string>) => {
    return [...new Set(arr)]
}

export const emptyRepo : Repo = {
  id: "Lorem ipsum",
  briefIntro: "Lorem ipsum dolor sit amet",
  intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  owner: "TheManWhoLovesTheWorld",
  version: "v0.1.0",
  createdAt: "1970-01-01 08:00:00",
  modifiedAt: "1970-01-01 08:00:00",
  tags: ["Placeholder"],
  status: "Unknown",
  links: [
    {
      name: "Hyperlink",
      url: "/",
      target: "_self"
    }
  ]
}

export const repoTags = 
  unique(config.repos.map((repo) => {
    return repo.tags
  }).flat())

export const repoStatuses = 
  unique(config.repos.map((repo) => {
    return repo.status
  }))

export default config.repos
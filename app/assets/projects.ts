import config from './config'
import type { Project } from './main'

const unique = (arr: Array<string>) => {
    return [...new Set(arr)]
}

export const emptyProject : Project = {
  id: "Lorem ipsum",
  briefIntro: "Lorem ipsum dolor sit amet",
  intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  owner: "TheManWhoLovesTheWorld",
  version: "v0.1.0",
  createTime: "1970-01-01 08:00:00",
  modifyTime: "1970-01-01 08:00:00",
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

export const projectTags = 
  unique(config.projects.map((project) => {
    return project.tags
  }).flat())

export const projectStatuses = 
  unique(config.projects.map((project) => {
    return project.status
  }))

export default config.projects
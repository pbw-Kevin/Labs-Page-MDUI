import { config } from './config'
import type { Repo } from './main'

const unique = (arr: Array<string>) => {
    return [...new Set(arr)];
}

export const emptyRepo : Repo = {
  id: "",
  briefIntro: "",
  intro: "",
  owner: "",
  version: "",
  createdAt: "",
  modifiedAt: "",
  tags: [""],
  status: "",
  links: [
    {
      name: "",
      url: "",
      target: ""
    },
  ]
}

export var repoTags = 
  unique(config.repos.map((repo) => {
    return repo.tags
  }).flat())

export var repoStatuses = 
  unique(config.repos.map((repo) => {
    return repo.status
  }))

export default config.repos
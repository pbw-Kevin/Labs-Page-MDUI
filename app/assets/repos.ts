export type Repo = {
  id: string;
  briefIntro: string;
  intro: string;
  owner: string;
  version: string;
  createdAt: string;
  modifiedAt: string;
  tags: string[];
  status: string;
  links: {
      name: string;
      url: string;
      target?: string;
  }[]
}

var repos = [
  {
    id: "JS-SiteTime",
    briefIntro: "基于 JavaScript 的网站运行时间显示插件",
    intro: "一款基于 JavaScript 的，用于在网页中实时显示网站运行时间的小插件。\n使用指南和更多信息参见链接。",
    owner: "AIR-Kevin",
    version: "Version 1.0",
    createdAt: "2024-06-29 11:58:27",
    modifiedAt: "2024-06-29 11:58:27",
    tags: [
      "JavaScript"
    ],
    status: "Stable",
    links: [
      {
        name: "博客文章",
        url: "https://blog.air-kevin.rf.gd/2024/JS-SiteTime",
      },
      {
        name: "GitHub Repository",
        url: "https://github.com/pbw-Kevin/JS-SiteTime",
        target: "_blank"
      },
    ]
  },
  {
    id: "JoyEver",
    briefIntro: "在线永乐游戏",
    intro: "一款名叫“永乐大典”的手势游戏的在线版本\n官网和更多信息参见链接。",
    owner: "AIR-Kevin",
    version: "Version 1.0-alpha.1",
    createdAt: "2025-06-07",
    modifiedAt: "2025-08-01",
    tags: [
      "游戏",
      "Vue",
      "MDUI",
    ],
    status: "Developing",
    links: [
      {
        name: "官网",
        url: "https://joyever.rth2.xyz/",
        target: "_blank"
      },
      {
        name: "GitHub Repository",
        url: "https://github.com/pbw-Kevin/JoyEver",
        target: "_blank"
      },
    ]
  },
  {
    id: "JiYu-UDP-Attack-Cpp",
    briefIntro: "使用 C++ 编写的，用于极域电子教室的 UDP 重放攻击工具",
    intro: "此工具可用于在受极域电子教室控制的机房中，对已上线的其它学生机执行命令。\n使用指南和更多信息参见链接。\n注意：此工具仅供学习和研究使用，请勿用于非法用途。\n受到了 ht0Ruial/jiyu_udp_attack 的启发。",
    owner: "AIR-Kevin",
    version: "Version 1.0",
    createdAt: "2025-08-01",
    modifiedAt: "2025-08-01",
    tags: [
      "极域电子教室",
      "C++",
      "UDP 重放攻击"
    ],
    status: "Developing",
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/pbw-Kevin/JiYu-UDP-Attack-Cpp",
        target: "_blank"
      },
    ]
  },
  {
    id: "Labs-Page-MDUI",
    briefIntro: "在线实验室页面，使用 MDUI 和 Nuxt 编写",
    intro: "一款用于生成静态在线实验室页面的工具，使用 MDUI 和 Nuxt 编写。\n使用指南和更多信息参见链接。",
    owner: "AIR-Kevin",
    version: "Version 1.0",
    createdAt: "2025-08-05",
    modifiedAt: "2025-08-05",
    tags: [
      "MDUI",
      "Nuxt",
      "实验室页面"
    ],
    status: "Stable",
    links: [
      {
        name: "在线预览",
        url: "https://labs.air-kevin.rf.gd/",
      },
      {
        name: "GitHub Repository",
        url: "https://github.com/pbw-Kevin/JS-SiteTime",
        target: "_blank"
      },
    ]
  },
]

export var repoTags = 
  repos.map((repo) => {
    return repo.tags
  }).flat().filter((tag, index, tags) => {
    return tags.indexOf(tag) == index
  })

export var repoStatuses = 
  repos.map((repo) => {
    return repo.status
  }).filter((tag, index, tags) => {
    return tags.indexOf(tag) == index
  })

export default repos
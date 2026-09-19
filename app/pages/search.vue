<script lang="ts" setup>
import config from '~/assets/config'
import '@mdui/icons/keyboard-arrow-down'
import { default as projects, projectStatuses } from '~/assets/projects'
import ProjectCardGroup from '~/components/ProjectCardGroup.vue'

useHead({
  title: `搜索${config.titleDelimiter}${config.title}`
})

const keyword = ref('')
const status = ref('')

onMounted(() => {
  const route = useRoute()
  keyword.value = (typeof route.query.keyword === 'string' ? route.query.keyword.toLowerCase() : '')
  status.value = (typeof route.query.status === 'string' ? route.query.status.toLowerCase() : '')
})

const processedProjects = projects.map(
  function processProject(project: any): string[] {
    if (typeof project === 'string') {
      return [project.toLowerCase()]
    } else if (Array.isArray(project)) {
      return project.flatMap(processProject)
    } else if (typeof project === 'object' && project !== null) {
      return Object.values(project).flatMap(processProject)
    } else {
      return []
    }
  }
)

const satisfiedProjects = computed(() => {
  const processedKeywords = keyword.value.split(" ").map(k => k.trim().toLowerCase()).filter(k => k !== "")
  return processedProjects.reduce((acc: typeof projects, project, index) => {
    if (
      processedKeywords.every((k) => project.some((r) => r.includes(k))) &&
      (status.value === '' || projects[index]?.status.toLowerCase() === status.value.toLowerCase())
    ) acc.push(projects[index] as any)
    return acc
  }, [] as typeof projects)
})
</script>

<template>
  <h1>搜索</h1>
  <div class="search-bar">
    <mdui-text-field
      name="keyword" label="关键词" placeholder="标题、标签、作者、简介、正文……"
      :value="keyword" @input="keyword = $event.target.value"
    ></mdui-text-field>
    <mdui-select name="status" label="状态" placeholder="选择状态" :value="status" @change="status = $event.target.value">
      <mdui-menu-item v-for="status in projectStatuses" :value="status.toLowerCase()">{{ status }}</mdui-menu-item>
      <mdui-button-icon slot="end-icon">
        <mdui-icon-keyboard-arrow-down></mdui-icon-keyboard-arrow-down>
      </mdui-button-icon>
    </mdui-select>
  </div>
  <p>
    💡 提示：再点一次状态中的选项可以取消选择
  </p>
  <ProjectCardGroup :projects="satisfiedProjects"></ProjectCardGroup>
  <p v-if="satisfiedProjects.length === 0" class="no-project">
    没有找到相关项目
  </p>
</template>

<style scoped>
.search-bar {
  margin-bottom: 10px;
  display: flex;
}

mdui-text-field {
  flex-grow: 1;
  margin-right: 2px;
}

mdui-select {
  width: 200px;
}

.no-project {
  text-align: center;
}
</style>

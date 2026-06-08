<script lang="ts" setup>
import config from '~/assets/config'
import '@mdui/icons/keyboard-arrow-down'
import { default as repos, repoStatuses } from '~/assets/repos'
import RepoCardGroup from '~/components/RepoCardGroup.vue'

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

const processedRepos = repos.map(
  function processRepo(repo: any): string[] {
    if (typeof repo === 'string') {
      return [repo.toLowerCase()]
    } else if (Array.isArray(repo)) {
      return repo.flatMap(processRepo)
    } else if (typeof repo === 'object' && repo !== null) {
      return Object.values(repo).flatMap(processRepo)
    } else {
      return []
    }
  }
)

const satisfiedRepos = computed(() => {
  const processedKeywords = keyword.value.split(" ").map(k => k.trim().toLowerCase()).filter(k => k !== "")
  return processedRepos.reduce((acc: typeof repos, repo, index) => {
    if (
      processedKeywords.every((k) => repo.some((r) => r.includes(k))) &&
      (status.value === '' || repos[index]?.status.toLowerCase() === status.value.toLowerCase())
    ) acc.push(repos[index] as any)
    return acc
  }, [] as typeof repos)
})
</script>

<template>
  <div class="content">
    <h1>搜索</h1>
    <div class="search-bar">
      <mdui-text-field
        name="keyword" label="关键词" placeholder="标题、标签、作者、简介、正文……"
        :value="keyword" @input="keyword = $event.target.value"
      ></mdui-text-field>
      <mdui-select name="status" label="状态" placeholder="选择状态" :value="status" @change="status = $event.target.value">
        <mdui-menu-item v-for="status in repoStatuses" :value="status.toLowerCase()">{{ status }}</mdui-menu-item>
        <mdui-button-icon slot="end-icon">
          <mdui-icon-keyboard-arrow-down></mdui-icon-keyboard-arrow-down>
        </mdui-button-icon>
      </mdui-select>
    </div>
    <p>
      💡 提示：再点一次状态中的选项可以取消选择
    </p>
    <RepoCardGroup :repos="satisfiedRepos"></RepoCardGroup>
    <p v-if="satisfiedRepos.length === 0" class="no-repo">
      没有找到相关项目
    </p>
  </div>
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

.no-repo {
  text-align: center;
}
</style>

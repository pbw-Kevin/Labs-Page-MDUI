<script lang="ts" setup>
import config from '~/assets/config'
import '@mdui/icons/keyboard-arrow-down'
import { default as repos, repoStatuses } from '~/assets/repos'
import RepoCardGroup from '~/components/RepoCardGroup.vue'

useHead({
  title: `搜索${config.titleDelimiter}${config.title}`,
})

var keyword = ref('')
var status = ref('')

onMounted(() => {
  var route = useRoute()
  keyword.value = (typeof route.query.keyword === 'string' ? route.query.keyword : '').toLowerCase()
  status.value = (typeof route.query.status === 'string' ? route.query.status : '').toLowerCase()
})

const processedRepos = repos.map((repo) => {
  return (function processRepo(rp: any): string[] {
    if (typeof rp === 'string') {
      return [rp.toLowerCase()]
    } else if (Array.isArray(rp)) {
      return rp.flatMap(processRepo)
    } else if (typeof rp === 'object' && rp !== null) {
      return Object.values(rp).flatMap(processRepo)
    } else {
      return []
    }
  })(repo)
})

var satisfiedRepos = computed(() => {
  var processedKeywords = keyword.value.split(" ").map(k => k.trim().toLowerCase()).filter(k => k !== "")
  return processedRepos.reduce((acc: typeof repos, repo, index) => {
    if (
      processedKeywords.every((k) => repo.some((r) => r.includes(k))) &&
      (status.value === '' || repos[index]?.status.toLowerCase() === status.value.toLowerCase())
    ) {
      acc.push(repos[index] as any)
    }
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
    <RepoCardGroup :repos="satisfiedRepos"></RepoCardGroup>
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
</style>

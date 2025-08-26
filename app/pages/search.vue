<script lang="ts" setup>
import 'mdui/components/text-field'
import 'mdui/components/select'
import 'mdui/components/button-icon'
import '@mdui/icons/keyboard-arrow-down'
import { default as repos, repoStatuses } from '~/assets/repos'
import RepoCard from '~/components/RepoCard.vue'

useHead({
  title: '搜索 - AIR-Kevin 的实验室',
})

var keyword = ref('')
var status = ref('')

onMounted(() => {
  var route = useRoute()
  keyword.value = route.query.keyword as string || ''
  status.value = route.query.status as string || ''
})

var satisfiedRepos = computed(() => {
  return repos.filter((repo) => {
    return (!keyword.value || JSON.stringify(repo).toLowerCase().includes(keyword.value.toLowerCase())) &&
      (!status.value || repo.status.toLowerCase() == status.value)
  })
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
    <RepoCard v-for="repo in satisfiedRepos" :repo />
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

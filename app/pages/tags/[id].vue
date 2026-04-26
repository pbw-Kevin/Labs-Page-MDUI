<script lang="ts" setup>
import config from '~/assets/config'
import { default as allRepos } from '~/assets/repos'
import RepoCardGroup from '~/components/RepoCardGroup.vue'

var id = ref('')

var repos = computed(() => {
  return allRepos.filter((repo) => {
    return repo.tags.includes(id.value)
  })
})

onMounted(() => {
  var route = useRoute()
  if (typeof route.params.id === 'string') {
    id.value = route.params.id
  }
  useHead({
    title: `标签：${id.value}${config.titleDelimiter}${config.title}`
  })
})
</script>

<template>
  <div class="content">
    <h1>标签：{{ id }}</h1>
    <RepoCardGroup :repos v-if="repos.length > 0" />
    <p v-else>
      标签不存在<br />
      <NuxtLink to="/tags">返回标签列表</NuxtLink>
    </p>
  </div>
</template>
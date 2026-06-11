<script lang="ts" setup>
import config from '~/assets/config'
import RepoDetail from '~/components/RepoDetail.vue'
import repos from '~/assets/repos'

const id = ref('')

const existRepo = computed(() => {
  return repos.find((tmpRepo) => {
    return tmpRepo.id === id.value
  })
})

onMounted(() => {
  const route = useRoute()
  const router = useRouter()
  if (typeof route.params.id !== 'string') router.push('/')
  else {
    id.value = route.params.id;
    useHead({
      title: `项目：${id.value}${config.titleDelimiter}${config.title}`
    })
  }
})
</script>

<template>
  <h1>项目：{{ id }}</h1>
  <RepoDetail :id="id" v-if="existRepo"></RepoDetail>
  <p v-else>
    项目不存在<br />
    <NuxtLink to="/">返回首页</NuxtLink>
  </p>
</template>
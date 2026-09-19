<script lang="ts" setup>
import config from '~/assets/config'
import ProjectDetail from '~/components/ProjectDetail.vue'
import projects from '~/assets/projects'

const id = ref('')

const existProject = computed(() => {
  return projects.find((tmpProject) => {
    return tmpProject.id === id.value
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
  <ProjectDetail :id v-if="existProject"></ProjectDetail>
  <p v-else>
    项目不存在<br />
    <NuxtLink to="/">返回首页</NuxtLink>
  </p>
</template>
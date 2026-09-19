<script lang="ts" setup>
import config from '~/assets/config'
import allProjects from '~/assets/projects'
import ProjectCardGroup from '~/components/ProjectCardGroup.vue'

const id = ref('')

const projects = computed(() => {
  return allProjects.filter((project) => {
    return project.tags.includes(id.value)
  })
})

onMounted(() => {
  const route = useRoute()
  const router = useRouter()
  if (typeof route.params.id !== 'string') {
    router.push('/tags')
    return
  }
  id.value = route.params.id
  useHead({
    title: `标签：${id.value}${config.titleDelimiter}${config.title}`
  })
})
</script>

<template>
  <h1>标签：{{ id }}</h1>
  <ProjectCardGroup :projects v-if="projects.length > 0" />
  <p v-else>
    标签不存在<br />
    <NuxtLink to="/tags">返回标签列表</NuxtLink>
  </p>
</template>
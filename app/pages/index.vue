<script lang="ts" setup>
import config from '~/assets/config'
import projects from '~/assets/projects'
import ProjectCardGroup from '~/components/ProjectCardGroup.vue'

useHead({
  title: config.title
})
</script>

<template>
  <h1>项目列表</h1>
  <ProjectCardGroup :projects></ProjectCardGroup>
</template>
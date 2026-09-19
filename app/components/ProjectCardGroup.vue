<script lang="ts" setup>
import type { Project } from '~/assets/main'
import ProjectCard from '~/components/ProjectCard.vue'

const prop = defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="project-card-container">
    <ProjectCard v-for="project in prop.projects" :project />
  </div>
</template>

<style scoped>
.project-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
}

.project-card {
  max-width: 600px;
}
</style>
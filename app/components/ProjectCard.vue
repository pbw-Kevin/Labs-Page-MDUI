<script lang="ts" setup>
import type { Project } from '~/assets/main'
import StatusChip from './StatusChip.vue'
import TagChip from './TagChip.vue'

const prop = defineProps<{
  project: Project
}>()
</script>

<template>
  <mdui-card class="project-card">
    <NuxtLink class="title card-title" :to="`/projects/${prop.project.id}`">{{ prop.project.id }}</NuxtLink>
    <p class="card-brief-intro">{{ prop.project.briefIntro }}</p>
    <div>
      <TagChip v-for="tag in prop.project.tags" :tag></TagChip>
    </div>
    <StatusChip :status="prop.project.status"></StatusChip>
  </mdui-card>
</template>

<style scoped>
mdui-card {
	padding: 10px;
	margin: 5px;
	box-shadow: var(--mdui-elevation-level2);
	background-color: rgb(var(--mdui-color-surface-container-low));
}

.card-title {
	font-size: 20px;
	height: 20px;
	font-weight: bold;
}

.card-title:hover {
  text-decoration: underline;
}

.card-brief-intro {
  font-size: 14px;
  line-height: 20px;
  margin: 5px 0;
}
</style>
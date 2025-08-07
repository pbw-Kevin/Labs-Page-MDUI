<script lang="ts" setup>
import 'mdui/components/card'
import 'mdui/components/chip'

import { type Repo } from '~/assets/repos'
import StatusChip from './StatusChip.vue'
import TagChip from './TagChip.vue'

const prop = defineProps<{
  repo: Repo
}>()
</script>

<template>
  <mdui-card class="repo-card">
    <NuxtLink class="title card-title" :to="`/repos/${prop.repo.id}`">{{ prop.repo.id }}</NuxtLink>
    <p class="card-brief-intro">{{ prop.repo.briefIntro }}</p>
    <div>
      <TagChip v-for="tag in prop.repo.tags" :tag></TagChip>
    </div>
    <StatusChip :status="prop.repo.status"></StatusChip>
  </mdui-card>
</template>

<style scoped>
mdui-card {
	width: 440px;
	height: 160px;
  overflow: overlay;
	padding: 10px;
	margin: 5px;
	box-shadow: var(--mdui-elevation-level2);
	background-color: rgb(var(--mdui-color-surface-container-low));
}

mdui-chip {
  margin: 0 4px;
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
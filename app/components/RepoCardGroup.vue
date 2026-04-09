<script lang="ts" setup>
import type { Repo } from '~/assets/main'
import RepoCard from '~/components/RepoCard.vue'

const prop = defineProps<{
  repos: Repo[]
}>()
</script>

<template>
  <div class="repo-card-container" :style="{ maxWidth: (prop.repos.length * 410 + 389) + 'px' }">
    <RepoCard v-for="repo in prop.repos" :repo />
  </div>
</template>

<style scoped>
.repo-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
}

.repo-card {
  max-width: 600px;
}
</style>
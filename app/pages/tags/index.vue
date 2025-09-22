<script lang="ts" setup>
import TagChip from '~/components/TagChip.vue'
import { repoTags } from '~/assets/repos'

useHead({
  title: '标签 - AIR-Kevin 的实验室',
})
</script>

<template>
  <div class="content">
    <h1>标签</h1>
    <TagChip v-for="tag in repoTags" :tag></TagChip>
  </div>
</template>
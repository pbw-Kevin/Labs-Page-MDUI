<script lang="ts" setup>
import config from '~/assets/config'
import TagChip from '~/components/TagChip.vue'
import { repoTags } from '~/assets/repos'

useHead({
  title: `标签${config.titleDelimiter}${config.title}`
})
</script>

<template>
  <div class="content">
    <h1>标签</h1>
    <TagChip v-for="tag in repoTags" :tag></TagChip>
  </div>
</template>
<script lang="ts" setup>
import config from '~/assets/config'
import TagChip from '~/components/TagChip.vue'
import { projectTags } from '~/assets/projects'

useHead({
  title: `标签${config.titleDelimiter}${config.title}`
})
</script>

<template>
  <h1>标签</h1>
  <TagChip v-for="tag in projectTags" :tag></TagChip>
</template>
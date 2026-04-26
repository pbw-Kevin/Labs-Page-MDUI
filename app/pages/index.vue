<script lang="ts" setup>
import config from '~/assets/config'
import repos from '~/assets/repos'
import RepoCardGroup from '~/components/RepoCardGroup.vue'

useHead({
  title: config.title
})
</script>

<template>
  <div class="content">
    <h1>项目列表</h1>
    <RepoCardGroup :repos></RepoCardGroup>
  </div>
</template>
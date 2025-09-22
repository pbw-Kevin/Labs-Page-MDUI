<script lang="ts" setup>
import repos from '~/assets/repos'
import RepoCardGroup from '~/components/RepoCardGroup.vue'

useHead({
  title: 'AIR-Kevin 的实验室',
})
</script>

<template>
  <div class="content">
    <h1>项目列表</h1>
    <RepoCardGroup :repos></RepoCardGroup>
  </div>
</template>
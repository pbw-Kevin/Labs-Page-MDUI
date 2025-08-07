<script lang="ts" setup>
import repos from '~/assets/repos'
import RepoCard from '~/components/RepoCard.vue'

useHead({
  title: 'AIR-Kevin 的实验室',
})
</script>

<template>
  <div class="content">
    <h1>项目列表</h1>
    <RepoCard v-for="repo in repos" :repo />
  </div>
</template>
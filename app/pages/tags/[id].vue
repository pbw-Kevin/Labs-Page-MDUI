<script lang="ts" setup>
import repos from '~/assets/repos'
import RepoCard from '~/components/RepoCard.vue';

var id = ref('');

onMounted(() => {
  var route = useRoute()
  id.value = route.params.id as string
  useHead({
    title: `${id.value} - 标签 - AIR-Kevin 的实验室`,
  })
})
</script>

<template>
  <div class="content">
    <h1>标签：{{ id }}</h1>
    <RepoCard v-for="repo in repos.filter((repo) => {return repo.tags.includes(id)})" :repo />
  </div>
</template>
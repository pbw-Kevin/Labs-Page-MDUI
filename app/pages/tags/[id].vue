<script lang="ts" setup>
import repos from '~/assets/repos'
import RepoCardGroup from '~/components/RepoCardGroup.vue';

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
    <RepoCardGroup :repos="repos.filter((repo) => {return repo.tags.includes(id)})" />
  </div>
</template>
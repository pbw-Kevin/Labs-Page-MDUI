<script lang="ts" setup>
import '@mdui/icons/label'
import { repoTags } from '~/assets/repos';

useHead({
  title: '标签 - AIR-Kevin 的实验室',
})
</script>

<template>
  <div class="content">
    <h1>标签</h1>
    <NuxtLink v-for="tag in repoTags" :to="`/tags/${tag}`">
      <mdui-chip>
        {{ tag }}
        <mdui-icon-label slot="icon"></mdui-icon-label>
      </mdui-chip>
    </NuxtLink>
  </div>
</template>

<style scoped>
mdui-chip {
  margin: 0 4px;
}
</style>

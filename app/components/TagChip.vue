<script lang="ts" setup>
import '@mdui/icons/label'
import '@mdui/icons/search'

defineProps<{
  tag: string
}>()
</script>

<template>
  <NuxtLink :to="`/tags/${tag}`">
    <mdui-chip>
      {{ tag }}
      <mdui-icon-label slot="icon"></mdui-icon-label>
      <mdui-icon-search slot="end-icon"></mdui-icon-search>
    </mdui-chip>
  </NuxtLink>
</template>
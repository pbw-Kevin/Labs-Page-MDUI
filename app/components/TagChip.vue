<script lang="ts" setup>
import 'mdui/components/chip'
import '@mdui/icons/label'

defineProps<{
  tag: string
}>()
</script>

<template>
  <NuxtLink :to="`/tags/${tag}`">
    <mdui-chip>
      {{ tag }}
      <mdui-icon-label slot="icon"></mdui-icon-label>
    </mdui-chip>
  </NuxtLink>
</template>
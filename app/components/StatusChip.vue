<script lang="ts" setup>
import 'mdui/components/chip'
import '@mdui/icons/view-list--outlined'

defineProps<{
  status: string
}>()
</script>

<template>
  <NuxtLink :to="`/search?status=${status.toLowerCase()}`">
    <mdui-chip :style="{ backgroundColor: `rgb(var(--mdui-color-status-${status.toLowerCase()}, var(--mdui-color-surface)))` }">
      状态: {{ status }}
      <mdui-icon-view-list--outlined slot="icon"></mdui-icon-view-list--outlined>
    </mdui-chip>
  </NuxtLink>
</template>
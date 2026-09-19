<script lang="ts" setup>
import { autoToggleNavBar } from '~/assets/main'

defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to class="title" @click="autoToggleNavBar()">
    <mdui-list-item rounded>
      <slot></slot>
    </mdui-list-item>
  </NuxtLink>
</template>
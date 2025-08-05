<script lang="ts" setup>
import 'mdui/components/navigation-drawer'
import '@mdui/icons/home'
import '@mdui/icons/search'
import '@mdui/icons/label'
import '@mdui/icons/info'
</script>

<template>
  <mdui-navigation-drawer class="navigation-drawer" open="true" close-on-overlay-click>
    <mdui-list>
      <mdui-list-subheader>导航</mdui-list-subheader>
      <NuxtLink to="/" class="title">
        <mdui-list-item rounded>
          返回首页
          <mdui-icon-home slot="icon"></mdui-icon-home>
        </mdui-list-item>
      </NuxtLink>
      <NuxtLink to="/search" class="title">
        <mdui-list-item rounded>
          搜索项目
          <mdui-icon-search slot="icon"></mdui-icon-search>
        </mdui-list-item>
      </NuxtLink>
      <NuxtLink to="/tags" class="title">
        <mdui-list-item rounded>
          标签
          <mdui-icon-label slot="icon"></mdui-icon-label>
        </mdui-list-item>
      </NuxtLink>
      <NuxtLink to="/about" class="title">
        <mdui-list-item rounded>
          关于本页
          <mdui-icon-info slot="icon"></mdui-icon-info>
        </mdui-list-item>
      </NuxtLink>
    </mdui-list>
  </mdui-navigation-drawer>
</template>

<style scoped>
mdui-navigation-drawer {
  position: fixed;
  top: 64px;
  box-shadow: var(--mdui-elevation-level2);
}

mdui-list-subheader {
  height: 32px;
  line-height: 32px;
  font-size: 16px;
}

mdui-list {
  padding: 10px;
}
</style>
<script lang="ts" setup>
import '@mdui/icons/home'
import '@mdui/icons/search'
import '@mdui/icons/label'
import '@mdui/icons/info'
import { toggleNavBar } from '~/assets/main'
import NavigationDrawerItem from '~/components/NavigationDrawerItem.vue'
</script>

<template>
  <mdui-navigation-drawer
    class="navigation-drawer"
    :open="toggleNavBar"
    @open="toggleNavBar = true"
    @close="toggleNavBar = false"
    close-on-overlay-click
  ><mdui-list>
      <mdui-list-subheader>导航</mdui-list-subheader>
      <NavigationDrawerItem to="/">
        <mdui-icon-home slot="icon"></mdui-icon-home>
        返回首页
      </NavigationDrawerItem>
      <NavigationDrawerItem to="/search">
        <mdui-icon-search slot="icon"></mdui-icon-search>
        搜索项目
      </NavigationDrawerItem>
      <NavigationDrawerItem to="/tags">
        <mdui-icon-label slot="icon"></mdui-icon-label>
        标签
      </NavigationDrawerItem>
      <NavigationDrawerItem to="/about">
        <mdui-icon-info slot="icon"></mdui-icon-info>
        关于
      </NavigationDrawerItem>
    </mdui-list>
  </mdui-navigation-drawer>
</template>

<style scoped>
mdui-navigation-drawer {
  position: fixed !important;
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
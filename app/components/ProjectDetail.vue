<script lang="ts" setup>
import '@mdui/icons/info'
import '@mdui/icons/link'
import '@mdui/icons/keyboard-arrow-down'
import '@mdui/icons/people'
import '@mdui/icons/access-time'
import { default as projects, emptyProject } from '~/assets/projects'
import StatusChip from '~/components/StatusChip.vue'
import TagChip from '~/components/TagChip.vue'

const props = defineProps<{
  id: string
}>()

const project = computed(() => {
  return projects.find((tmpProject) => {
    return tmpProject.id === props.id
  }) || emptyProject
})
</script>

<template>
  <p class="project-brief-intro">{{ project.briefIntro }}</p>
  <mdui-list>
    <mdui-collapse accordion>
      <mdui-collapse-item>
        <mdui-list-item slot="header" rounded>
          <mdui-icon-info slot="icon"></mdui-icon-info>
          标签
          <mdui-icon-keyboard-arrow-down slot="end-icon"></mdui-icon-keyboard-arrow-down>
        </mdui-list-item>
        <div class="info-collapse-content">
          <div>
            <mdui-chip class="unclickable-chip">
              {{ project.owner }}
              <mdui-icon-people slot="icon"></mdui-icon-people>
            </mdui-chip>
            <mdui-chip class="unclickable-chip">
              {{ project.version }}
            </mdui-chip>
          </div>
          <div>
            <mdui-chip class="unclickable-chip">
              创建于：{{ project.createTime }}
              <mdui-icon-access-time slot="icon"></mdui-icon-access-time>
            </mdui-chip>
            <mdui-chip class="unclickable-chip">
              修改于：{{ project.modifyTime }}
              <mdui-icon-access-time slot="icon"></mdui-icon-access-time>
            </mdui-chip>
          </div>
          <div>
            <TagChip v-for="tag in project.tags" :tag></TagChip>
          </div>
          <div>
            <StatusChip :status="project.status"></StatusChip>
          </div>
        </div>
      </mdui-collapse-item>
      <p v-html="project.intro.replaceAll('\n', '<br />')"></p>
      <mdui-collapse-item>
        <mdui-list-item slot="header" rounded>
          <mdui-icon-link slot="icon"></mdui-icon-link>
          相关链接
          <mdui-icon-keyboard-arrow-down slot="end-icon"></mdui-icon-keyboard-arrow-down>
        </mdui-list-item>
        <div class="info-collapse-content">
          <div v-for="link in project.links">
            <a :href="link.url" :target="link?.target">{{ link.name }}</a>
          </div>
        </div>
      </mdui-collapse-item>
    </mdui-collapse>
  </mdui-list>
</template>

<style scoped>
.info-collapse-content {
  margin: 10px 40px;
}

p.project-brief-intro {
  font-style: italic;
  color: rgb(var(--mdui-color-on-surface-variant));
}

mdui-chip.unclickable-chip {
  cursor: default;
  pointer-events: none;
}

mdui-collapse-item {
  box-shadow: var(--mdui-elevation-level2);
  border-radius: var(--mdui-shape-corner-extra-large);
}
</style>
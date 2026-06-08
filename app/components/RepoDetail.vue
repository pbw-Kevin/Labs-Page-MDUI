<script lang="ts" setup>
import '@mdui/icons/info'
import '@mdui/icons/link'
import '@mdui/icons/keyboard-arrow-down'
import '@mdui/icons/people'
import '@mdui/icons/access-time'
import { default as repos, emptyRepo } from '~/assets/repos'
import StatusChip from '~/components/StatusChip.vue'
import TagChip from '~/components/TagChip.vue'

const props = defineProps<{
  id: string
}>()

const repo = computed(() => {
  return repos.find((tmpRepo) => {
    return tmpRepo.id === props.id
  }) || emptyRepo
})
</script>

<template>
  <p>{{ repo.briefIntro }}</p>
  <mdui-list>
    <mdui-collapse accordion>
      <mdui-collapse-item>
        <mdui-list-item slot="header" rounded>
          <mdui-icon-info slot="icon"></mdui-icon-info>
          Tags
          <mdui-icon-keyboard-arrow-down slot="end-icon"></mdui-icon-keyboard-arrow-down>
        </mdui-list-item>
        <div class="info-collapse-content">
          <div>
            <mdui-chip>
              {{ repo.owner }}
              <mdui-icon-people slot="icon"></mdui-icon-people>
            </mdui-chip>
            <mdui-chip>
              {{ repo.version }}
            </mdui-chip>
          </div>
          <div>
            <mdui-chip>
              Created at {{ repo.createdAt }}
              <mdui-icon-access-time slot="icon"></mdui-icon-access-time>
            </mdui-chip>
            <mdui-chip>
              Modified at {{ repo.modifiedAt }}
              <mdui-icon-access-time slot="icon"></mdui-icon-access-time>
            </mdui-chip>
          </div>
          <div>
            <TagChip v-for="tag in repo.tags" :tag></TagChip>
          </div>
          <div>
            <StatusChip :status="repo.status"></StatusChip>
          </div>
        </div>
      </mdui-collapse-item>
      <p v-html="repo.intro.replaceAll('\n', '<br />')"></p>
      <mdui-collapse-item>
        <mdui-list-item slot="header" rounded>
          <mdui-icon-link slot="icon"></mdui-icon-link>
          Links
          <mdui-icon-keyboard-arrow-down slot="end-icon"></mdui-icon-keyboard-arrow-down>
        </mdui-list-item>
        <div class="info-collapse-content">
          <div v-for="link in repo.links">
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
</style>
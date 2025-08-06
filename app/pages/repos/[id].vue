<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import 'mdui/components/list'
import 'mdui/components/collapse'
import '@mdui/icons/info'
import '@mdui/icons/link'
import '@mdui/icons/keyboard-arrow-down'
import '@mdui/icons/people'
import '@mdui/icons/access-time'
import '@mdui/icons/label'
import '@mdui/icons/view-list--outlined'
import { default as repos, type Repo } from '~/assets/repos'

var id;
var repo: Ref<Repo> = ref({
  id: "",
  briefIntro: "",
  intro: "",
  owner: "",
  version: "",
  createdAt: "",
  modifiedAt: "",
  tags: [""],
  status: "",
  links: [
    {
      name: "",
      url: "",
      target: ""
    },
  ]
})

onMounted(() => {
  var route = useRoute()
  var router = useRouter()
  var id = route.params.id;
  if(!id) router.push('/')
  else {
    useHead({
      title: `${id} - 项目 - AIR-Kevin 的实验室`,
    })
    var repoGet = repos.find((tmpRepo) => {
      return tmpRepo.id == id
    })
    if(repoGet) repo.value = repoGet
  }
})
</script>

<template>
  <div class="content">
    <h1>项目：{{ repo.id }}</h1>
    <p>{{ repo.briefIntro }}</p>
    <mdui-list>
      <mdui-collapse accordion>
        <mdui-collapse-item>
          <mdui-list-item slot="header" rounded>
            <mdui-icon-info slot="icon"></mdui-icon-info>
            Tags
            <mdui-icon-keyboard-arrow-down slot="end-icon"></mdui-icon-keyboard-arrow-down>
          </mdui-list-item>
            <div style="margin: 10px 0px 0px 2.5rem">
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
                <NuxtLink v-for="tag in repo.tags" :to="`/tags?id=${tag}`">
                  <mdui-chip>
                    {{ tag }}
                    <mdui-icon-label slot="icon"></mdui-icon-label>
                  </mdui-chip>
                </NuxtLink>
              </div>
              <div>
                <NuxtLink :to="`/search?status=${repo.status}`">
                  <mdui-chip :style="{ backgroundColor: `rgb(var(--mdui-color-status-${repo.status.toLowerCase()}))` }">
                    状态: {{ repo.status }}
                    <mdui-icon-view-list--outlined slot="icon"></mdui-icon-view-list--outlined>
                  </mdui-chip>
                </NuxtLink>
              </div>
            </div>
        </mdui-collapse-item>
        <p v-html="repo.intro.replace('\n', '<br />')"></p>
        <mdui-collapse-item>
          <mdui-list-item slot="header" rounded>
            <mdui-icon-link slot="icon"></mdui-icon-link>
            Links
            <mdui-icon-keyboard-arrow-down slot="end-icon"></mdui-icon-keyboard-arrow-down>
          </mdui-list-item>
          <div style="margin: 10px 40px;">
            <div v-for="link in repo.links">
              <a :href="link.url" :target="link?.target">{{ link.name }}</a>
            </div>
          </div>
        </mdui-collapse-item>
      </mdui-collapse>
    </mdui-list>
  </div>
</template>

<style scoped>
mdui-chip {
  margin: 0 4px;
}
</style>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import 'mdui/components/list'
import 'mdui/components/collapse'
import '@mdui/icons/info'
import '@mdui/icons/link'
import '@mdui/icons/keyboard-arrow-down'
import '@mdui/icons/people'
import '@mdui/icons/access-time'
import { default as repos, type Repo } from '~/assets/repos'
import StatusChip from '~/components/StatusChip.vue'
import TagChip from '~/components/TagChip.vue'

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
  var id = route.query.id;
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
              <a :href="link.url" :target="link?.target">{{ link.name }}</a><br/>
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

.info-collapse-content {
  margin: 10px 40px;
}
</style>
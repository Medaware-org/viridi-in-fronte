<script setup lang="ts">

import {onMounted, ref} from "vue";
import CatalystApi from "@/api/CatalystApi";
import {useArticleStore} from "@/store/articleStore";
import {useRouter} from "vue-router";
import {useToast} from "primevue";
import {toStandardError} from "@/util/ErrorHandling";
import {ProgressSpinner} from "primevue";

const content = ref<string | undefined>(undefined)
const articles = useArticleStore()
const router = useRouter()
const toast = useToast()

onMounted(() => {
  if (articles.article === undefined || articles.article.id === undefined) {
    router.push('/')
    return
  }

  try {
    CatalystApi.instance().avisApi.retrieveAvisCss().then(css => {
      const style = document.createElement('style')
      style.textContent = css.data
      document.head.appendChild(style)
    })
    CatalystApi.instance().tanContentApi.renderArticle(articles.article!.id!).then(res => {
      content.value = res.data
    })
  } catch (e) {
    toast.add(toStandardError(e))
  }
})

</script>

<template>
  <div class="flex flex-col w-full h-full text-center" v-if="content === undefined">
    <ProgressSpinner></ProgressSpinner>
    <span>Rendering ...</span>
  </div>
  <div class="flex flex-row align-top mt-5 justify-center">
    <div v-if="content !== undefined" v-html="content" style="width: 90%"></div>
  </div>
</template>

<style scoped lang="css">

</style>
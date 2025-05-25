<script setup lang="ts">
import type {ArticleResponse, TopicResponse} from '@/api/generated/api'
import image from '@/assets/TestImage.jpg'
import image2 from '@/assets/background.png'
import defaultUser from '@/assets/defaultUser.png'
import {onMounted, ref} from 'vue'
import CatalystApi from '@/api/CatalystApi'
import {toStandardError} from "@/util/ErrorHandling";
import {InputText, useToast} from "primevue";
import {useArticleStore} from "@/store/articleStore";
import {useRouter} from "vue-router";
import ArticleCard from "@/components/ArticleCard.vue";

const articles = ref<ArticleResponse[]>([]);
const toast = useToast()
const articleStore = useArticleStore()
const router = useRouter()
const searchQuery = defineModel<string>()

async function loadArticles() {
  try {
    await CatalystApi.instance().publicApi.queryArticles(searchQuery.value || "").then(art => {
      articles.value = art.data
    })
  } catch (e) {
    toast.add(toStandardError(e))
  }
}

function readArticle(article: ArticleResponse) {
  articleStore.setArticle(article)
  router.push(`/article`)
}

onMounted(() => loadArticles())

</script>

<template>
  <div class="w-full">
    <div class="flex flex-row justify-center">
      <InputText type="text" v-model="searchQuery" placeholder="Search ..." @input="loadArticles()" class="block w-1/2 bg-white mt-8" />
    </div>
  </div>
  <div class="flex flex-row flex-wrap justify-center align-top gap- text-black w-full" v-if="articles.length > 0">
    <ArticleCard v-for="art in articles" class="hover:scale-105 transition-all cursor-pointer block"
                 @click="readArticle(art)">
      <template v-slot:card-head>
        <!--url of image shall be changed to the title image of article-->
        <img :src="image2" alt="Dona eis requiem">
      </template>
      <template v-slot:card-title>
        {{ art.title }}
      </template>
      <template v-slot:card-description>
        Pie jesu domine dona eis requiem
      </template>
      <template v-slot:card-creationdate>
        {{ art.date }}
      </template>
      <template v-slot:card-autor>
        {{ art.author }}
      </template>
      <template v-slot:card-autor-picture>
        <img :src="defaultUser">
      </template>
    </ArticleCard>
  </div>
</template>

<style lang="css">

::-webkit-scrollbar {
  display: none;
}
</style>

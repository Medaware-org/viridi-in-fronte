<script setup lang="ts">
import type {ArticleResponse, TopicResponse} from '@/api/generated/api'
import image from '@/assets/TestImage.jpg'
import image2 from '@/assets/background.png'
import defaultUser from '@/assets/defaultUser.png'
import {onMounted, ref} from 'vue'
import CatalystApi from '@/api/CatalystApi'
import ArticleCard from "@/components/ArticleCard.vue";

const articles = ref<ArticleResponse[]>([]);

async function fetchAllArticles() {
  try {
    await CatalystApi.instance().publicApi.getAllArticles().then(art => {
      articles.value = art.data
    })
  } catch (e) {
    // TODO
    console.log(e)
  }
}

onMounted(() => fetchAllArticles())

</script>

<template>
  <div class="card-container">
    <ArticleCard v-for="art in articles">
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
.card-container {
  margin: auto 0;
  height: fit-content;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  display: none;
}
</style>

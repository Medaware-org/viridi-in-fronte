<script setup lang="ts">
    import type { ArticleResponse, TopicResponse } from '@/api/generated/api'
    import ArticleCard from '@/components/ArticleCard.vue'
    import image from '@/assets/TestImage.jpg'
    import image2 from '@/assets/background.png'
    import defaultUser from '@/assets/defaultUser.png'
    import { onMounted, ref } from 'vue'
    import CatalystApi from '@/api/CatalystApi'

    const articles = ref()

    onMounted(async () => {
        try {
            //for the serchbar which searches the content
            let articles = await CatalystApi.instance().publicApi.queryArticles('')
            let articlesData = articles.data as ArticleResponse[]
            console.log(articlesData)
        } catch (err) {
            //console.log(err)
        }
    })
</script>

<template>
    <div class="card-container">
        <ArticleCard>
            <template v-slot:card-head>
                <!--url of image shall be changed to the title image of article-->
                <img :src="image2">
            </template>
            <template v-slot:card-title>
              This is the title of the card
            </template>
            <template v-slot:card-description>
              description
            </template>
            <template v-slot:card-creationdate>
                creation Date
            </template>
            <template v-slot:card-autor>
                Autor name
            </template>
            <template v-slot:card-autor-picture>
                url of image shall be changed to the autor image
                <img :src="defaultUser">
            </template>
        </ArticleCard>
        <!--
        <ArticleCard>
            <template v-slot:card-head>
                <img :src="image2">
            </template>
            <template v-slot:card-title>
              This is the title of the card
            </template>
            <template v-slot:card-description>
              this is the description of the cardsdfdadsadssfddfsaf sdahslkd asdkjhsdlk asdkfsdahkf sadlkfadfsk kjsdakjsd jasdkjdsakj 
            </template>
            <template v-slot:card-creationdate>
                12.04.5234
            </template>
            <template v-slot:card-autor>
                Someone
            </template>
            <template v-slot:card-autor-picture>
                <img :src="defaultUser">
            </template>
        </ArticleCard>
        <ArticleCard>
            <template v-slot:card-head>
                <img :src="defaultUser">
            </template>
            <template v-slot:card-title>
              This is the title of the cardddddd
            </template>
            <template v-slot:card-description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae quibusdam molestias, minima dignissimos veniam voluptatem voluptates a expedita iusto soluta libero aperiam laboriosam harum sunt porro nobis eligendi facilis?
            </template>
            <template v-slot:card-creationdate>
                12.04.5234
            </template>
            <template v-slot:card-autor>
                Rastiii Patak
            </template>
            <template v-slot:card-autor-picture>
                <img :src="image">
            </template>
        </ArticleCard>
        -->
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

<script setup lang="ts">
    import ArticleDetails from './ArticleDetails.vue';
    import {useArticleStore} from '@/stores/ArticleStore'

    const articleStore = useArticleStore()
</script>

<template>
    <div>
        <ArticleDetails v-for="article in articleStore.getArticleOver"/>
    </div>
</template>

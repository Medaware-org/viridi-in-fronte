import { defineStore } from "pinia"
import type { Article, ArticleOver } from "@/types/article"

export const useArticleStore = defineStore('ArticleStore', {
    state: () => ({
        //articles must be fetchet when app.vue is mounted
        articles: [{id:'test', name:'test', description:'test'}] as Article[]
    }),
    getters: {
        getArticleOver(): ArticleOver[]{
            return this.articles.map(article => {
                return {
                    id: article.id,
                    name: article.name
                }
            })
        },
        findById() {
            return (articleId: string): Article | undefined => this.articles.find(article => article.id = articleId)
        }
    }
})
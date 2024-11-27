import { defineStore } from "pinia"
import type { Article, ArticleOver } from "@/types/article"

export const useArticleSrotre = defineStore('ArticleStore', {
    state: () => ({
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
        }
    }
})
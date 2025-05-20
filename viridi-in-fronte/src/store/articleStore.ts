import {defineStore} from "pinia";

import type {ArticleResponse} from "@/api/generated";

export const useArticleStore = defineStore("articleStore", {
        state: () => ({
                article: undefined as ArticleResponse | undefined
        }),

        actions: {
                setArticle(newArticle: ArticleResponse) {
                        this.article = newArticle
                },

                clear() {
                        this.article = undefined
                }
        }
})
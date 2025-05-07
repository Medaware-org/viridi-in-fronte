import {
        AnterogradiaApi,
        AVISApi,
        Configuration, PublicApi,
        ResourcesApi,
        StatusApi,
        TangentialAuthApi, TangentialAuxiliaryApi, TangentialContentApi,
        TopicsApi
} from "@/api/generated";

export default class CatalystApi {
        private static singleton: CatalystApi | undefined = undefined

        public statusApi: StatusApi
        public avisApi: AVISApi
        public resourcesApi: ResourcesApi
        public publicApi: PublicApi
        public antgApi: AnterogradiaApi
        public tanAuthApi: TangentialAuthApi
        public tanContentApi: TangentialContentApi
        public topicApi: TopicsApi
        public topicsApi: TopicsApi
        public tanAuxApi: TangentialAuxiliaryApi

        static instance(): CatalystApi {
                if (!this.singleton)
                        throw new Error("CatalystApi has not been initialized.")

                return this.singleton
        }

        static init(basePath: string) {
                if (this.singleton)
                        throw new Error("CatalystApi has already been initialized.")

                let config = new Configuration({basePath})
                let api = new CatalystApi()
                api.statusApi = new StatusApi(config)
                api.avisApi = new AVISApi(config)
                api.resourcesApi = new ResourcesApi(config)
                api.publicApi = new PublicApi(config)
                api.antgApi = new AnterogradiaApi(config)
                api.tanAuthApi = new TangentialAuthApi(config)
                api.tanContentApi = new TangentialContentApi(config)
                api.topicApi = new TopicsApi(config)
                api.topicsApi = new TopicsApi(config)
                api.tanAuxApi = new TangentialAuxiliaryApi(config)
                this.singleton = api
        }
}
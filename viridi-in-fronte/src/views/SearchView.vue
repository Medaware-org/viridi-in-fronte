<script setup lang="ts">
import Dropzone from '@/components/Dropzone.vue'
import {ref, computed, watch} from 'vue'
import CatalystApi from "@/api/CatalystApi";
import type {RequestGHS200Response, RequestOCR200Response} from "@/api/generated";
import {data} from "autoprefixer";
import {useToast} from "primevue";
import {toStandardError} from "@/util/ErrorHandling";
import {ProgressSpinner} from "primevue";

const dropzoneFile = ref<any | null>(null)

const ocrResult = ref<RequestOCR200Response | undefined>(undefined)
const ghsResult = ref<RequestGHS200Response | undefined>(undefined)
const working = ref(false)

const toast = useToast()
watch([ocrResult, ghsResult], () => {
  if (ocrResult.value !== undefined && ghsResult.value !== undefined)
    working.value = false
})

const drop = (event: any) => {
  dropzoneFile.value = event.dataTransfer.files[0]
}

const selectedFile = () => {
  dropzoneFile.value = (document.querySelector('.dropzoneFile123')! as any).files[0]
  working.value = true
  try {
    CatalystApi.instance().publicApi.requestGHS(dropzoneFile.value).then(res => {
      ghsResult.value = res.data
    })
    CatalystApi.instance().publicApi.requestOCR(dropzoneFile.value).then(res => {
      ocrResult.value = res.data
    })
  } catch (e) {
    toast.add(toStandardError(e))
  }
}

const preview = computed(() => {
  if (dropzoneFile.value === null)
    return ''

  if (dropzoneFile.value['type'] !== undefined)
    if (dropzoneFile.value['type'].split('/')[0] === 'image') {
      return URL.createObjectURL(dropzoneFile.value)
    } else return 'Upload failed: This is not an image'
})
</script>

<template>
  <div v-if="working" class="w-full flex flex-col align-middle justify-center h-full text-center">
    <ProgressSpinner></ProgressSpinner>
    <span>Working ...</span>
  </div>
  <div v-if="!working">
    <div class="dropzone-container">
      <h1 class="h1 font-bold" v-if="ghsResult !== undefined">{{ ghsResult?.output }}</h1>
      <h1>Search for Text</h1>
      <Dropzone @drop.prevent="drop" @change="selectedFile" :image="preview"/>
    </div>
    <div v-if="dropzoneFile !== null">
      <div class="flex flex-row gap-10 align-middle justify-center border-black border-t">
        <div v-if="ocrResult !== undefined && ocrResult!.data!.length > 0">
          <table>
            <tr>
              <th>Value</th>
            </tr>
            <tr v-for="line in ocrResult?.data!">
              <td>{{ line }}</td>
            </tr>
          </table>
        </div>
        <div v-if="ghsResult !== undefined">
          <table>
            <tr>
              <th>Class</th>
              <th>Confidence</th>
              <th></th>
            </tr>
            <tr v-for="score in ghsResult.scores">
              <td>{{ score.class }}</td>
              <td>
                <progress :value="score.score" max="1" style="color: green;">{{ score.score * 100 }}%</progress>
              </td>
              <td>
                <span v-if="score.class.toLowerCase().trim() === ghsResult.output.toLowerCase().trim()">&larr;</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dropzone-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0px;
}

.h1 {
  color: red;
  font-size: 20px;
  font-weight: 100;
  margin: 0px 20px 32px;
}
</style>

<script setup lang="ts">
    import Dropzone from '@/components/Dropzone.vue'
    import { ref, computed } from 'vue'

    const dropzoneFile = ref<any | null>('')

    const drop = (event: any) => {
        dropzoneFile.value = event.dataTransfer.files[0]
    }

    const selectedFile = () => {
        dropzoneFile.value = document.querySelector('.dropzoneFile123').files[0]
    }

    const preview = computed(() => {
        if(dropzoneFile.value['type'] !== undefined)
        if(dropzoneFile.value['type'].split('/')[0] === 'image'){
            return URL.createObjectURL(dropzoneFile.value)
        } else return null
    })
</script>

<template>
    <div class="dropzone-container">
        <h1 class="h1">This is some warning text which needs to be written</h1>
        <Dropzone @drop.prevent="drop" @change="selectedFile"/>
        <span class="file-info">File: {{ dropzoneFile.name }}</span>
    </div>
    <img v-if="preview" :src="preview" alt="This should be an image">
    Dropzone dings type: {{ dropzoneFile['type'] }}
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

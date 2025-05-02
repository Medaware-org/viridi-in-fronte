<script setup lang="ts">
    import { ref } from 'vue'

    defineProps<{
        image: string | undefined |  null
    }>()

    const active = ref(false)

    const toggleActive = () => {
        active.value = !active.value
    }
</script>

<template>
    <div  
        @dragenter.prevent="toggleActive" 
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="toggleActive"
        class="dropzone"
        :class="{ 'active-dropzone': active }"
    >
        <div v-if="image && image!='Upload failed this is no image'" class="image-container">        
            <img :src="image" alt="Uploaded Image" class="image">
            <div class="image-text reupload">
                <span>Re-Upload File via Drag and Drop OR
                <label for="dropzoneFile">CLICK HERE</label></span>
                <input type="file" id="dropzoneFile" class="dropzoneFile123">
            </div>
        </div>
        <div v-else class="noimage">
            <p class="error">{{ image }}</p>
            <span>Drag or Drop File</span>
            <span>OR</span>
            <label for="dropzoneFile">Select File</label>
            <input type="file" id="dropzoneFile" class="dropzoneFile123">
        </div>
    </div>
</template>

<style lang="css">
    .dropzone {
        width: 600px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dashed var(--color-header-2);
        background-color: white;
        transition: .3s ease all;

        label {
            padding: 8px 12px;
            color: white;
            background-color: var(--color-card);
            transition: .3s ease all;
            cursor: pointer;
        }

        input {
            display: none;
        }
    }

    @media (max-width: 800px) {
        .dropzone {
            width: 350px;
            height: 205px;
        }
    }

    .active-dropzone {
        color: white;
        border-color: white;
        background-color: var(--color-card);

        label {
            background-color: white;
            color: var(--color-card);
        }
    }

    .noimage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        place-items: center;
        row-gap: 16px;
    }

    .image-container {
        height: 100%;
        width: 100%;
    }

    .image {
        height: 100%;
        width: 100%;
    }

    .error {
        color: red;
        margin-bottom: 8px;
        font-size: x-large;
    }

    .reupload {
        display: flex;
        place-items: center;
        justify-content: center;
        margin-top: 4px;

        label {
            cursor: pointer;
            color: var(--color-card);
            padding: 0px 0px;
            background-color: white;
            text-decoration: underline;
        }

        input {
            display: none;
        }
    }
</style>

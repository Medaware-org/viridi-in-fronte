<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>

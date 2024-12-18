<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavBar/>
    <div class="overflow-y-auto">
      <Header/>
      <RouterView/>
      <Footer/>
    </div>
  </div>
</template>

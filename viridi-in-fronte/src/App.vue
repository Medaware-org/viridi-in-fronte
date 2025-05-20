<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'
import {Toast} from "primevue";

</script>

<template>
  <Toast position="top-right"/>
  <div class="flex flex-col h-screen">
    <div class="header-background">
      <NavBar/>
      <Header/>
    </div>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style lang="css">
.header-background {
  background-image: url("@/assets/background.png");
  background-color: var(--color-banner);
  background-size: 250%;
  box-shadow: 0 4px 10px -2px gray;
}
</style>

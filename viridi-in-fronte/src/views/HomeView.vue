<script setup lang="ts">
  import ArticleContainer from '../components/ArticleContainer.vue'
  import CatalystApi from "@/api/CatalystApi";
  import type {TopicResponse} from "@/api/generated";
  import {onMounted} from "vue";

  onMounted(async () => {
    let topics = await CatalystApi.instance().topicsApi.getAllTopics()
    let topicsData = topics.data as TopicResponse[]
  })

  //todo: fetch first half put it in first contaienr
  //fetch second half put it in secon container
  //second container can be removed if not necesarry
</script>

<template>
  <main>
    <div class="content-box">
      <div class="content-sub-box">
        <div>
          <b>
            Lorem Ipsum
          </b>
          <p>
            Lorem Ipsum small description asdasdfdsfsdafsdffdfdafds
          </p>
        </div>
        <div class="line"></div>
      </div>
      <ArticleContainer/>
    </div>
  </main>
</template>

<style lang="css">
  .content-box {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    height: 100%;
  }

  .content-sub-box {
    display: flex;
    justify-content: space-between;
    place-items: center;
    margin: 0 3rem;

    b {
      font-size: x-large;
      font-weight: 500;
    }
  }

  .content-text {
    width: 100%;
  }

  .line {
    border: 0;
    background-color: grey;
    opacity: 30%;
    height: 1px;
    cursor: pointer;
    width: 60%;
  }

  @media (max-width: 1200px) {
    .line {
      width: 50%;
    }
  }

  @media (max-width: 1000px) {
    .content-box {
      margin: 2rem auto;
    }

    .line {
      display: none;
    }
  }
</style>

<script setup>
import {useRouter} from 'vue-router';
import BaseHeader from '../components/headers/BaseHeader.vue'

let router = useRouter();

let onClick = () => {
  console.log("asdasd")
  router.push("/login");
}

</script>

<template>
  <v-container>
    <BaseHeader image="src/assets/basket-img.png" />
    <v-row class="info">
      <h1>Get The Freshest Fruit Salad Combo</h1>
      <p>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</p>
      <v-btn @click="onClick" class="w-100" variant="tonal">
        Let’s Continue
      </v-btn>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-container {
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .info {
    padding: 2rem;
    height: 100%;
    flex: 1;
  }
  h1 {
    font-size: 20px;
  }
  .v-btn.v-btn--density-default {
    background-color: #FFA451;
    height: calc(var(--v-btn-height) + 1rem);
    color: #ffffff;
  }
</style>

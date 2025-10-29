<script setup>
import SearchBar from '@/components/SearchBar.vue';
import FeaturedSalads from '@/components/FeaturedSalads.vue';
import CategorizedSalads from '@/components/CategorizedSalads.vue';
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/products';

let dados = JSON.parse(localStorage.getItem("user"));
const store = useProductStore();

onMounted(() => {
  store.fetchProducts();
})

</script>

<template>
  <v-layout>
    <v-app-bar elevation="0">
        <template v-slot:prepend>
          <v-btn>
            <img src="@/assets/menu-icon.svg">
          </v-btn>
        </template>

        <template v-slot:append>
          <v-btn>
            <img src="@/assets/shopping-basket.svg" alt="" srcset="">
          </v-btn>
        </template>
    </v-app-bar>

    <v-container class="mt-16">
      <h1>Hello {{dados.username}}, <strong>What fruit salad combo do you want today?</strong></h1>
      <SearchBar />
      <FeaturedSalads :salads="store.getProducts"/>
      <CategorizedSalads />
    </v-container>

    
  </v-layout>
</template>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
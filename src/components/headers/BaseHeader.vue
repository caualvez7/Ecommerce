<script setup>

const props = defineProps(['image']);


</script>

<template>
    <v-row class="header">
      <img :src="props.image" alt="Cesta de frutas">
      <img class="mt-4" src="@/assets/basket-shadow-img.png" alt="Sombra da frutas">
    </v-row> 
</template>

<style scoped> 
  .header {
    background-color: #FFA451;
    justify-content: center;
    padding: 2rem 0;
    flex: 1;
  }
</style>
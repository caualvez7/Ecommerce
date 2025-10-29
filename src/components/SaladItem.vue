<script setup>
  import { useShoppingCarStore } from '@/stores/shoppingCar';
  const props = defineProps(["salad"]);
  const store = useShoppingCarStore();

  const onAdd = (salad) =>{
    store.addProduct(salad);
  }
</script>

<template>
    <div class="card-container">
        <v-card>
            <div class="img-container">
                <img :src="`http://localhost:3000/uploads/${salad.photo}`" alt="Foto da salada"/>
            </div>
            <h4>{{ salad.name }}</h4>
            <div class="price-container">
                <span class="price">R$ {{ salad.price }}</span>
                <div class="spacer"></div>
                <button @click="onAdd(salad)" class="add"><v-icon icon="mdi-plus"></v-icon></button>
            </div>
        </v-card>
    </div>
</template>

<style>
.card-container {
    padding: 4px;
    width: 50%;
}
.card-container .v-card {
    background-color: white;
    padding: 1rem;
    width: 100%;
}

h4 {
    text-align: center;
    color: #27214D;
    line-height: 1rem;
    font-size: 1rem;
}

.img-container {
    padding: 0;
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    width: 100%;
    max-height: 100%;
}
.price-container {
    margin-top: 0.5rem;
    color: #F08626;
    font-size: 14px;
    display: flex;
}
.spacer {
    flex: 1;
}

.add {
    background-color: #FFF2E7;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
}
</style>
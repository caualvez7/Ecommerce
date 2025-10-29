<script setup>
import { useProductStore } from '@/stores/products';
import SaladItem from './SaladItem.vue';
defineProps(["option"]);

const productsStore = useProductStore()
</script>

<template>
    <div>
        <SaladItem 
            v-for="salad in productsStore.getByCategory(option)"
            :salad="salad" :key="salad._id" />
    </div>
</template>

<style scoped>
div {
        display: flex;
        flex-wrap: wrap;
    }
    </style>

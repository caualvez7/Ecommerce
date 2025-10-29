import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', () => {
  const products = ref([]);

  const getProducts = computed(() => {
    return products.value;
  });

  const getByCategory = (category) => {
    return products.value.filter((product) => {
        return product.category == category;
    })
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    products.value = await response.json();
  }

  return {
    products,
    getProducts,
    getByCategory,
    fetchProducts
  }
})

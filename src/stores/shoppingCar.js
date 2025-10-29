import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingCarStore = defineStore('shoppingCar', () => {
    const basket = ref([]);

    const getBasket = computed(() => {
        return basket.value;
    })

    const getTotal = computed(() => {
        let soma = 0;
        basket.value.forEach(item => {
            soma += item.total
        });
        return soma;
    });

    const addProduct = (product) => {
        let productIndex = basket.value.findIndex((item) => {
            return product._id == item.product._id;
        });
        let p = {};
        if(productIndex >= 0) {
            p = basket.value[productIndex];
            p.quantity ++;
            p.total += product.price;
            basket.value.splice(productIndex, 1);
        } else {
            p = {
                product: product,
                quantity: 1,
                total: product.price
            }
        }
        basket.value.push(p);
        console.log(basket);
    }

    return {basket, getBasket, getTotal, addProduct}
})

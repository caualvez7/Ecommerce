<script setup>
  import SaladItem from './SaladItem.vue';
  defineProps(["salads"]);

</script>

<template>
    <h2>Recommended Combo</h2>
    <div>
        <SaladItem v-for="salad in salads" :salad="salad"/>

    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-wrap: wrap;
    }
</style>
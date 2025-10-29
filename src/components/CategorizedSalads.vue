<script setup>
    import { ref } from 'vue';
    import HorizontalLista from './HorizontalLista.vue';
    const selectedTab = ref('protein');
    let tabsOptions = ["protein", "fresh", "fruit"];

</script>

<template>
    <v-tabs
      v-model="selectedTab"
      align-tabs="left"
    >
      <v-tab value="protein">Protein</v-tab>
      <v-tab value="fresh">Fesh</v-tab>
      <v-tab value="fruit">Fruit</v-tab>
    </v-tabs>

    <v-tabs-window v-model="selectedTab">
      <v-tabs-window-item
        v-for="option in tabsOptions"
        :key="option"
        :value="option"
      >
        <HorizontalLista :option="option" />
      </v-tabs-window-item>
    </v-tabs-window>
</template>
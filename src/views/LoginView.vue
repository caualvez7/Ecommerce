<script setup>
import BaseHeader from '@/components/headers/BaseHeader.vue';
import { useRouter } from 'vue-router';
import {ref} from 'vue';

let router = useRouter();

let username = ref('');
let password = ref('');
let onSubmit = async () => {
    let response = await fetch("http://localhost:3000/users/sign-up", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })    
    });
    let dados = await response.json();
    localStorage.setItem("user", JSON.stringify(dados));
    router.push("/home");
}
</script>

<template>
    <v-container>
      <BaseHeader image="src/assets/kissbasket-img.png" />
      <v-form @submit.prevent="onSubmit" class="login-form mt-4">
      <h1>What is your firstname?</h1>
        <v-text-field
            v-model="username"
            label="Tomy"
            class="mt-4"
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Your secret"
            type="password"
            class="mt-4"
        ></v-text-field>

        <v-btn
            :loading="loading"
            text="Start Ordering"
            type="submit"
            block
        ></v-btn>
        </v-form>
    </v-container>
  </template>

<style scoped>
.v-container {
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .login-form {
    flex: 1;
    padding: 2rem;
  }
  h1 {
    font-size: 20px;
  }

  input {
    background-color: #F3F1F1;
    border-radius: 10px;
  }

  .v-field__field {
    border-radius: 10px;
  }

  .v-btn.v-btn--density-default {
    background-color: #FFA451;
    height: calc(var(--v-btn-height) + 1rem);
    color: #ffffff;
  }
</style>
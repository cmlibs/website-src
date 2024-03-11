<script setup>
import { RouterLink } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<template>
  <default-layout>
    <div class="not-found">
      <h1>Not Found</h1>
      <p>Page not found.</p>
      <router-link :to="{ name: 'home' }">Return home
      </router-link>
    </div>
  </default-layout>
</template>

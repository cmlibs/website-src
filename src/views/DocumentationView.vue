<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<template>
  <default-layout>
    <div class="apidocs">
      <h1>API Documentation</h1>
      <p>API documentation for the Zinc library.</p>
      <ul>
        <li><router-link to="/documentation/api">Zinc API latest</router-link></li>
      </ul>
    </div>
  </default-layout>
</template>

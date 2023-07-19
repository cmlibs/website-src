<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import DoxygenDocumentation from '../components/DoxygenDocumentation.vue'
</script>

<template>
  <default-layout>
    <div class="apidocs-page">
      <doxygen-documentation version="latest" />
    </div>
  </default-layout>
</template>

<template>
  <div class="doxygendocs">
    <doxygen-xml :baseURL="'/documentation/api/' + props.version" />
  </div>
</template>

<script setup>
import { DoxygenXml } from 'vue3-doxygen-xml'
const props = defineProps(['version'])

</script>
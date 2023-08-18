<script setup>
import { computed } from 'vue'
import { inject } from 'vue'

const waveui = inject('$waveui')

const apiLinkText = computed(() => {
  return waveui.breakpoint.md ? "API Docs" : "API Documentation"
})
</script>

<template>
  <div class="DefaultLayout lgu-DefaultLayout">
    <header class="DefaultLayout__header text-center">
      <h1>Continuum Modelling Libraries</h1>
    </header>
    <div class="d-flex smd-column DefaultLayout__middle">
      <aside class="DefaultLayout__nav sm12 md2">
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/documentation">{{  apiLinkText }}</router-link>
        </div>
        <div>
          <router-link to="/about">About</router-link>
        </div>
      </aside>
      <main class="grow DefaultLayout__main md2"><slot /></main>
    </div>
    <footer class="DefaultLayout__footer text-center">
      Available on <a target="_blank" href="https://github.com/cmlibs">GitHub</a>.
    </footer>
  </div>
</template>

<style scoped>
@media screen and (min-width: 640px) {
  .DefaultLayout__middle {
    margin: 0 10%;
  }
}
@media screen and (min-width: 0rem) {
  .DefaultLayout {
    margin: 0 5%;
  }
}
</style>

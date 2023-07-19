<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
/* Demo styles - can be discarded. */
header,
footer,
aside,
main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header,
footer {
  background-color: #e9f8fe;
  min-height: 60px;
}
aside {
  background-color: #fef2ff;
}
main {
  background-color: #efffed;
}
</style>

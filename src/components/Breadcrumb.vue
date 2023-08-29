<template>
  <w-breadcrumbs :items="breadcrumbData" xl />
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const breadcrumbData = ref([]);

const getBreadcrumbData = () => {
  let matched_list = route.matched;
  breadcrumbData.value = create_wbreadcrumb_list(matched_list)
};

watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true,
  }
);

function isHome(item) {
  return item.name === "home";
};

function create_wbreadcrumb_list(matched_list) {
  let wbreadcrumb_list = []
  matched_list.forEach(element => {
    if (!isHome(element)) {
      if (element.name == "apidocs-page") {
        wbreadcrumb_list = wbreadcrumb_list.concat([{ label: route.params.pageName, route: element.path }]);
      } else if (element.name) {
        wbreadcrumb_list = wbreadcrumb_list.concat([{ label: element.name, route: element.path }]);
      }
    }
  });
  if (wbreadcrumb_list.length) {
    wbreadcrumb_list = [{ route: "/", label: "Home" }].concat(wbreadcrumb_list)
  }
  return wbreadcrumb_list
}

</script>
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
  breadcrumbData.value = create_breadcrumb_list(matched_list)
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

function create_breadcrumb_list(matched_list) {
  let breadcrumb_list = []
  matched_list.forEach(element => {
    if (!isHome(element)) {
      if (element.name == "apidocs-page") {
        breadcrumb_list = breadcrumb_list.concat([{ label: route.params.pageName, route: element.path }]);
      } else if (element.name) {
        breadcrumb_list = breadcrumb_list.concat([{ label: element.name, route: element.path }]);
      }
    }
  });
  if (breadcrumb_list.length) {
    breadcrumb_list = [{ route: "/", label: "Home" }].concat(breadcrumb_list)
  }
  return breadcrumb_list
}

</script>
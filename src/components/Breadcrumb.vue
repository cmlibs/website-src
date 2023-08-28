//Breadcrumb.vue

<template>
  <w-breadcrumbs :items="breadList" xl />
</template>

<script>
export default {
  data() {
    return {
      breadList: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      console.log("matched home", route.name === "home")
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      console.log("matched", matched)
      console.log("matched", matched[0].path)
      console.log("matched", this.$route.params)
      let matched_list = [{ label: matched[0].name, route: matched[0].path }]
      if (this.$route.params.pageName) {
        matched_list = matched_list.concat([{ label: this.$route.params.pageName, route: matched[1].path }])
      }
      if (!this.isHome(matched[0])) {
        matched = [{ route: "/", label: "Home" }].concat(matched_list);
        console.log("matched concat", matched)
      }
      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
};
</script>
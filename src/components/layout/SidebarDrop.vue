<template>
  <ul class="list-inline py-2">
    <li class="mt-3">
      <a
        data-bs-toggle="collapse"
        href="#multiCollapseExample1"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
        class="text-decoration-none seim-dark pointer"
        style="font-size: 17px"
      >
        All Books
        <i class="feather-chevron-down"></i>
      </a>

      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body sidebar-card mx-3">
          Service not available right now!
        </div>
      </div>
    </li>

    <li class="mt-3">
      <a
        data-bs-toggle="collapse"
        href="#multiCollapseExample2"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
        class="text-decoration-none seim-dark pointer"
        style="font-size: 17px"
      >
        Authors
        <i class="feather-chevron-down"></i>
      </a>

      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="card card-body sidebar-card mx-3">
          <div v-for="author in authors" :key="author.id">
            <p class="text-dark">{{ author.name }}</p>
          </div>
        </div>
      </div>
    </li>

    <li class="mt-3">
      <a
        data-bs-toggle="collapse"
        href="#multiCollapseExample3"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
        class="text-decoration-none seim-dark pointer"
        style="font-size: 17px"
      >
        Type of Books
        <i class="feather-chevron-down"></i>
      </a>

      <div class="collapse multi-collapse" id="multiCollapseExample3">
        <div class="card card-body sidebar-card mx-3">
          <div v-for="category in categories" :key="category.id">
            <p class="text-dark">{{ category.name }}</p>
          </div>
        </div>
      </div>
    </li>

    <li class="mt-3">
      <a
        data-bs-toggle="collapse"
        href="#multiCollapseExample4"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
        class="text-decoration-none seim-dark pointer"
        style="font-size: 17px"
      >
        Services
        <i class="feather-chevron-down"></i>
      </a>

      <div class="collapse multi-collapse" id="multiCollapseExample4">
        <div class="card card-body sidebar-card mx-2">
          Service not available right now!
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import getAuthors from "../../composables/getAuthors";
import getCategory from "../../composables/getCategory";

export default {
  name: "Sidebar Dropdown",
  props: ["authors"],
  setup() {
    const { authors, load } = getAuthors();
    const { categories, categoryLoad } = getCategory();

    console.log(authors);
    load();
    categoryLoad();

    return { authors, categories };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-card {
  background: $primary !important;
}
</style>
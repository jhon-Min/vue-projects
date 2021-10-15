<template>
  <div class="side-bar vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="d-flex align-items-center mt-3">
            <button
              class="btn btn-hide animate__animated animate__slideInRight"
              @click="closeSideBar"
            >
              <i class="feather-x-circle fs-1 text-danger"></i>
            </button>

            <!-- Profile -->
            <div class="d-flex align-items-center">
              <div class="ms-5">
                <a
                  class="text-decoration-none fw-bold me-2 small seim-dark"
                  href="#"
                >
                  Seo Jun
                </a>
              </div>

              <div class="profile">
                <img src="../assets/img/profile.jpg" alt="" />
              </div>
            </div>
          </div>

          <hr class="semi-dark" />

          <div class="side-box">
            <ul class="list-inline mt-5">
              <li>
                <router-link :to="{ name: 'Home' }">Home</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'About' }">About Us</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Contact' }">Contact</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Services' }">Services</router-link>
              </li>
            </ul>
          </div>

          <div class="text-center d-block d-md-none">
            <hr />
            <SidebarDrop />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarDrop from "./layout/SidebarDrop.vue";

export default {
  name: "Side Bar",
  components: { SidebarDrop },
  methods: {
    closeSideBar() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
</style>
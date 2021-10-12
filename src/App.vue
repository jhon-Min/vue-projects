<template>
  <div>
    <NavBar />
  </div>
  <router-view :key="$route.path" />
  <Foot />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Foot from "./components/Foot.vue";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "App",
  components: { NavBar, Foot },
  data() {
    return {
      carts: this.globalArray,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > window.innerHeight) {
        console.log("active");
      }
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: $primary-font;
  background: #f8f9fa !important;
}

.carousel__next,
.carousel__prev {
  background: $primary;
  top: 130px !important;
  width: 40px;
  height: 40px;
}

.carousel__icon {
  color: $semi-dark;
}

.carousel__pagination-button {
  background: $semi-dark;
}

.carousel__pagination-button--active {
  background: $primary;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.7;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
</style>

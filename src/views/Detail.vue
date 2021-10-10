<template>
  <div v-if="book">
    <transition appear name="fade">
     <div>
        <div class="container item-detail">
        <div class="row justify-content-sm-start justify-content-center">
          <div class="col-12 col-md-4 col-lg-4">
            <img :src="book.img" alt="" class="img-fluid w-75 shadow" />
          </div>

          <div class="col-12 col-md-7 col-lg-8">
            <div
              class="
            d-flex
            justify-content-center justify-content-md-start
            align-items-center
          "
            >
              <h2>{{ book.title }}</h2>
              <span
                class="badge bg-success ms-3"
                v-if="book.stock == 'instock'"
                >{{ book.stock }}</span
              >
              <span class="badge bg-danger ms-3" v-else>{{ book.stock }}</span>
            </div>

            <div class="item-status">
              <p class="seim-dark">
                <span class="fs-5">{{ book.author }}</span> |
                {{ book.category }}
              </p>
              <p class="fs-5 fw-bold mb-1">{{ book.price }} Ks</p>
              <Rating :book="book" />
              <p class="mt-5">
                {{ book.description }}
              </p>
              <button
                class="btn btn-warning mt-4"
                v-if="book.stock == 'instock'"
                @click="addCart(book)"
              >
                <span class="me-2"><i class="feather-shopping-cart"></i></span>
                Add to Cart
              </button>

              <button class="btn btn-warning mt-4 disabled" v-else>
                <span class="me-2"><i class="feather-shopping-cart"></i></span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container mb-5">
        <h2 class="text-center mb-5">Related Book</h2>
        <div class="row">
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="item in books" :key="item.id">
              <div>
                <div
                  class="carousel__item"
                  v-if="book.id !== item.id && book.category == item.category"
                >
                  <SingleBook :book="item" />
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
     </div>
    </transition>
  </div>
  <div v-else>
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center"
        style="height: 50vh;"
      >
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import getBook from "../composables/getBook";
import getBooks from "../composables/getBooks";
import Rating from "../components/sub-component/Rating.vue";
import SingleBook from "../components/sub-component/SingleBook.vue";
import Spinner from "../components/sub-component/Spinner.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Book Detail",
  props: ["id"],
  components: {
    Rating,
    SingleBook,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Spinner,
  },
  setup(props) {
    const { book, bookLoad } = getBook(props.id);
    const { books, error, load } = getBooks();

    bookLoad();
    load();
    console.log(book);
    return { book, books };
  },

  data() {
    return {
      settings: {
        itemsToShow: 4,
        itemsToScroll: 3,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3,
          itemsToScroll: 2,
          snapAlign: "start",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          itemsToScroll: 3,
          //   snapAlign: "center",
        },
      },
    };
  },

  methods: {
    addCart(book) {
      let Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `${book.title} is added in the cart.`,
      });

      let checkCarts = this.$root.carts.find((cart) => cart.id == book.id);
      if (checkCarts) {
        this.$swal.fire({
          icon: "info",
          title: "Oops.....",
          text: `${book.title} book is already added in the cart.`,
        });
      } else {
        this.$root.carts.push({ ...book, qty: 1, sub: book.price });
        console.log(this.$root.carts);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item-detail {
  padding: 100px 0;
}

.carousel__slide {
  flex-shrink: 1;
  margin: 0px 8px 0px 8px;
}

.fade-enter-active, .fade-leave-active{
  // transition: opacity 2s ease;
  animation: fadeIn;
  animation-duration: 2s;
}
</style>

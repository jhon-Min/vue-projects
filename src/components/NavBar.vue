<template>
  <div class="">
    <!-- Sidebar -->
    <transition name="slide">
      <div class="side-bar vh-100" v-if="show">
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
                    <router-link :to="{ name: 'Services' }"
                      >Services</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- First Section -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 hero-header">
      <div class="container d-flex justify-content-between">
        <router-link :to="{ name: 'Home' }" class="text-decoration-none">
          <div class="brand-name text-dark fw-bold">
            <span class="text-warning">Sky</span>Book
          </div>
        </router-link>

        <div class="d-none d-lg-block" id="navbarNav">
          <ul class="navbar-nav nv-list">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Services' }" class="nav-link"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" class="nav-link"
                >About Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Contact' }" class="nav-link"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Profile -->
        <div class="d-flex align-items-center d-none d-lg-flex">
          <a href="" class="text-decoration-none text-secondary me-4">
            <i class="feather-heart fs-5"></i>
          </a>

          <router-link
            :to="{ name: 'Carts' }"
            class="text-decoration-none text-secondary position-relative"
            v-if="carts.length"
          >
            <i class="feather-shopping-cart fs-5 mb-0"></i>
            <span
              class="
                position-absolute
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{ carts.length }}
            </span>
          </router-link>

          <router-link
            :to="{ name: 'Carts' }"
            class="text-decoration-none text-secondary position-relative"
            v-else
          >
            <i class="feather-shopping-cart fs-5 mb-0"></i>
          </router-link>

          <div class="dropdown ms-5 d-none d-lg-block">
            <a
              class="text-decoration-none me-2 text-secondary"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Account
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Sing up</a></li>
              <li><a class="dropdown-item" href="">Register</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <div class="profile d-none d-lg-block">
            <img src="assets/img/profile.jpg" alt="" />
          </div>
        </div>

        <!-- When Tablet Screen -->
        <div class="d-flex align-items-center d-lg-none">
          <a href="" class="text-decoration-none text-secondary me-4">
            <i class="feather-heart fs-5"></i>
          </a>

          <router-link
            :to="{ name: 'Carts' }"
            class="text-decoration-none text-secondary position-relative"
            v-if="carts.length"
          >
            <i class="feather-shopping-cart fs-5 mb-0"></i>
            <span
              class="
                position-absolute
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{ carts.length }}
            </span>
          </router-link>

          <router-link
            :to="{ name: 'Carts' }"
            class="text-decoration-none text-secondary position-relative"
            v-else
          >
            <i class="feather-shopping-cart fs-5 mb-0"></i>
          </router-link>

          <div class="show-btn shadow pointer ms-5" @click="showSideBar">
            <i class="feather-align-right fs-4"></i>
          </div>
        </div>
      </div>
    </nav>

    <div class="bg-theme py-2 d-none d-md-block">
      <div class="container d-flex justify-content-center">
        <div class="nav-menu">
          <div class="d-inline-block">
            <DropList>
              All Books
              <i class="feather-chevron-down"></i>
              <template v-slot:lists>
                <li>
                  <a class="dropdown-item" href="#">Currently Not Available!</a>
                </li>
              </template>
            </DropList>
          </div>

          <div class="d-inline-block">
            <DropList>
              Authors
              <i class="feather-chevron-down"></i>
              <template v-slot:lists>
                <div v-for="author in authors" :key="author.id">
                  <li>
                    <a class="dropdown-item" href="#">{{ author.name }}</a>
                  </li>
                </div>
              </template>
            </DropList>
          </div>

          <div class="d-inline-block">
            <DropList>
              Type of Books
              <i class="feather-chevron-down"></i>
              <template v-slot:lists>
                <div v-for="category in categories" :key="category.id">
                  <li>
                    <a class="dropdown-item" href="#">{{ category.name }}</a>
                  </li>
                </div>
              </template>
            </DropList>
          </div>

          <div class="d-inline-block">
            <DropList>
              Audio Books
              <i class="feather-chevron-down"></i>
              <template v-slot:lists>
                <li>
                  <a class="dropdown-item" href="#">Currently Not Available!</a>
                </li>
              </template>
            </DropList>
          </div>

          <div class="d-inline-block">
            <DropList>
              Services
              <i class="feather-chevron-down"></i>
              <template v-slot:lists>
                <li>
                  <a class="dropdown-item" href="#">Currently Not Available!</a>
                </li>
              </template>
            </DropList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getAuthors from "../composables/getAuthors";
import getCategory from "../composables/getCategory";
import DropList from "../components/layout/DropDown.vue";

export default {
  name: "NavBar",
  components: { DropList },
  setup() {
    const { authors, load } = getAuthors();
    const { categories, categoryLoad } = getCategory();

    console.log(authors);
    load();
    categoryLoad();
    return { authors, categories };
  },

  data() {
    return {
      show: false,
      dropdownBtn: false,
      carts: this.globalArray,
    };
  },

  methods: {
    showSideBar() {
      this.show = !this.show;
    },

    closeSideBar() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
.side-bar {
  background-color: $primary;
  display: block !important;
  position: fixed;
  right: 0px;
  width: 250px;
  z-index: 3000;
  // margin-right: -100%;
  transition: 0.8s;
}

.side-box {
  text-align: center;
  // padding: 100px 0;

  .btn-hide {
    &:focus {
      box-shadow: none !important;
      // outline: none !important;
    }
  }
  ul {
    li {
      margin-bottom: 23px;
      a {
        text-decoration: none;
        font-size: 18px;
        color: $semi-dark;
        font-weight: bold;

        &:hover {
          border-bottom-color: #ffffff;
          border-bottom: 2px solid;
        }
      }
    }
  }
}

// ============= Navigation =========
.bg-theme {
  background: $primary;
}
.nv-list {
  li {
    margin: 0 8px;

    a {
      color: #555;
      transition: 0.5s;
      font-weight: bold;
      font-family: $primary-font;

      &:hover {
        color: black !important;
      }
    }
  }
}

.profile {
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

.search-bar {
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 15px;

  input {
    margin-left: 10px;
    border: none;
    width: 500px;

    &:focus-visible {
      outline: none;
    }
  }
}

.link {
  text-decoration: none;
  background: none;
  margin: 0px 23px;
  color: #555;
  font-weight: 500;
  transition: 0.5s;
  border: none;

  &:hover {
    color: black;
  }
}

.brand-name {
  font-size: 30px;
}

.show-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  color: #555;
  align-items: center;
}

// ======== Animation =========
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
.slide-enter-active {
  animation: slideInRight;
  animation-duration: 0.7s;
}

.slide-leave-active {
  animation: slideOutRight;
  animation-duration: 0.7s;
}

@media only screen and (max-width: 1200px) {
  /*Tablets [601px -> 1200px]*/
  .nav-menu {
    a {
      font-size: 15px;
      margin: 0 12px;
      font-weight: bold;
    }
  }
}

@media only screen and (max-width: 750px) {
  /*Big smartphones [426px -> 600px]*/
  .search-box {
    width: 80%;
  }

  .search-bar {
    input {
      width: 90% !important;
    }
  }

  .brand-name {
    font-size: 35px !important;
  }
}

@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/

  .hero-header {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .brand-name {
    font-size: 35px !important;
  }

  .search-box {
    width: 80%;
  }

  .search-bar {
    input {
      width: 90% !important;
    }
  }
}
</style>

<template>
  <div class="hero">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/hero/bg-img.jpg" class=" hero-img vh-85" alt="...">
          <div class="carousel-caption custom-slide">
            <!-- Hero Content -->
            <div class="container hero-content">
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start vh-fix">
                <div class="text-center text-md-start">
                  <p class="text-white fs-1 hero-title">
                    It's the food and groceries you love, <br />
                    delivered
                  </p>
                  <div class="bg-white d-inline-block seim-dark search-box">
                    <div class="search-bar">
                      <i class="feather-search text-secondary"></i>
                      <input
                        type="text"
                        class=""
                        placeholder="Search Book here..."
                        v-model="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/img/hero/hero.png" class=" hero-img vh-85" alt="...">
           <div class="carousel-caption custom-slide">
            <!-- Hero Content -->
            <div class="container hero-content">
              <div class="d-flex justify-content-center justify-content-lg-start align-items-center vh-fix">
                <div class="text-center text-md-start">
                  <p class="text-white fs-1 hero-title">
                    It's the food and groceries you love, <br />
                    delivered
                  </p>
                  <div class="bg-white d-inline-block seim-dark search-box">
                    <div class="search-bar">
                      <i class="feather-search text-secondary"></i>
                      <input
                        type="text"
                        class=""
                        placeholder="Search Book here..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/img/hero/travel.jpg" class=" hero-img vh-85" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> -->
    </div>
  </div>

  <div class="container">
    <BookList :books="filterBooks" />
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import BookList from "../components/BookList.vue";
import getBooks from "../composables/getBooks";

export default {
  name: "Home",
  components: { BookList },
  setup() {
    const search = ref('');
    const { books, error, load } = getBooks();

    console.log(books)

    const filterBooks = computed(() => {
      return books.value.filter(book => book.title.toLowerCase().includes(search.value.trim().toLowerCase()) );
    })

    load();
    return { books, search, filterBooks };
  },
};
</script>

<style lang="scss">
.vh-85 {
  height: 85vh !important;
}


.hero-img{
  background-size: cover !important;
  width: 100%;
  background-position: center top;
}

.custom-slide{
  right: 5% !important;
  left: 5% !important;
}

.hero-content{

  .search-bar {
    // position: absolute;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 16px;

    input {
      border: none;
      width: 500px;

      &:focus-visible {
        outline: none;
      }
    }
  }

  .hero-title {
    letter-spacing: 1px;
  }
}

@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/

  .search-box{
    width: 90%;
    border-radius: 55px;

      .search-bar {
        padding: 7px 4px;
      
        input{
          width: 80%!important;
        }
      }
  }
}
</style>

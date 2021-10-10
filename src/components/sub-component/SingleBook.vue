<template>
  <div class="card book-card bg-light">
    <figure class="imghvr-slide-down">
      <img :src="book.img" alt="" class="book-cv shadow" />
      <figcaption class="book-hov-eff">
        <div class="">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="fav-icon">
              <i class="fas fa-heart"></i>
            </div>

            <div class="add-cart-icon">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>

          <a to="#" class="mt-9 text-decoration-none pointer">
            <div class="d-flex justify-content-center">
              <div class="view">
                <i class="fas fa-book-open"></i>
              </div>
            </div>
          </a>
        </div>
      </figcaption>
    </figure>
    <div class="px-2 pt-3">
      <ul class="list-inline text-center">
        <li class="fw-bold title">
          <router-link :to="{ name: 'Detail', params: {id: book.id}}" class="text-decoration-none text-dark text-nowrap pointer">
            {{ cutTxt(book.title) }}
          </router-link>
        </li>
        <li class="small seim-dark fw-bold"> {{ book.author }} </li>
        <li class="mt-1 small price"> {{ book.price }} </li>
        <li>
         <Rating :book="book" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from './Rating.vue'
import VueStar from 'vue-star'

export default {
  name: "Single Book",
  props: ["book"],
  components: { Rating, VueStar },
  setup() {
    return {};
  },

  methods: {
    cutTxt(x) {
      if(x.length > 15){
          return x.substring(0, 15) + '...'
      }else{
          return x
      }             
    }
  },
};
</script>

<style lang="scss">
.book-card {
    border: none !important;
    width: 12.8rem;

    figure {
      background: blue !important;
      border-radius: 5px;

      .book-cv {
        border-radius: 5px !important;
        height: 230px;
        width: 100%;
      }

      .book-hov-eff {
        background: black;
        opacity: 0.8;

        .fav-icon,
        .add-cart-icon {
          background: white;
          width: 33px;
          height: 33px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          // backdrop-filter: blur(10px);

          .fa-heart,
          .fa-shopping-cart {
            color: #555;
          }
        }

        .fav-icon {
          &:hover {
            .fa-heart {
              color: red;
            }
          }
        }
        .add-cart-icon {
          &:hover {
            .fa-shopping-cart {
              color: #6c757d;
            }
          }
        }

        .view {
          background: white;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          .fa-book-open {
            color: #feb600;
            font-size: 20px;
          }
        }
      }
    }

    .title {
      font-size: 18px;
    }
    .price {
      font-size: 17px;
    }
    .rating {
      .fa-star {
        color: #666;
        margin-right: 2px;
        font-size: 14px;
      }
    }
  }
</style>
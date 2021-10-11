<template>
  <div class="content">
    <div class="text-center">
      <h3 class="fw-bold fs-2">OUR PRODUCTS</h3>
      <small>
        Browse the collection of our best selling and top interresting products.
        <br />
        ll definitely find what you are looking for.
      </small>
    </div>

    <div class="content-item mt-5">
      <a class="fw-bold seim-dark text-decoration-none fs-5" href="">
        <i class="feather-book-open me-2"></i>
        All Books
      </a>

      <div class="row mt-4 justify-content-center justify-content-md-start">
        <div
        class="col-5 col-md-4 col-lg-3 mb-5"
        v-for="book in books"
        :key="book.id"
        >
          <SingleBook :book="book" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleBook from "./sub-component/SingleBook.vue";

export default {
  name: "Book List",
  components: { 
    SingleBook,
  },
  props: ["books"],
};
</script>

<style lang="scss">

.content {
  margin: 100px 0px;
}

@media only screen and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
}
@media only screen and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
}
</style>
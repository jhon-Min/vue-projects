<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12 col-lg-9">
                <div class="card">
                    <h4 class="ms-3 mt-3 mb-0">Shopping Carts</h4>
                    <hr>
                    <transition-group tag="div" name="list" class="card-body mx-3" v-if="carts.length">
                        <div class="mb-5 d-flex justify-content-between " v-for="(cart, index) in carts" :key="index">
                            <div class="d-flex">
                                <img :src="cart.img" alt="" class="item-img shadow">
                                <div class="ms-5">
                                    <p class="fs-4 mb-1"> {{ cart.title }} </p>
                                    <p class="seim-dark"> {{ cart.author }} | <span class="small"> {{ cart.category }} </span> </p>
                                    <h4 class=""> {{ cart.price }} Ks </h4>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between align-items-baseline">
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-outline-secondary btn-sm btn-minus me-1" @click="reduceQty(cart)">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <input type="number" class="form-control cart-form w-25 text-center quantity" :value="cart.qty" min="1">
                                    <button class="btn btn-outline-secondary btn-plus btn-sm ms-1" @click="addQty(cart)">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>

                                <div class="ms-5 d-flex align-items-baseline">
                                    <p class="fs-5 text-nowrap">{{ cart.sub = cart.price * cart.qty }} Ks</p >
                                    <button class="btn btn-danger btn-sm ms-5" @click="delCart(cart, index)">
                                        <i class="feather-trash-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </transition-group>

                    <div class="card-body mx-3" v-else>
                        <p>There are no more items in your carts.</p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-3 mt-4 mt-lg-0">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0"> {{ carts.length }} items</p>
                            <!-- <p class="mb-0"> hello </p> -->
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0 fw-bold fs-5">Total</p>
                            <p class="mb-0 fw-bold fs-5"> {{ total }} Ks </p>
                        </div>
                        <hr>
                        
                        <button class="btn btn-warning w-100 mt-3">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carts',
    data() {
        return {
            carts: this.globalArray,
        }
    },

    methods: {
        addQty(cart) {
            return cart.qty++;
        },

        reduceQty(cart){
            if(cart.qty > 1){
                cart.qty--
            }
        },

        delCart(cart, index) {
            this.$swal.fire({
            title: 'Are you sure?',
            text: `Do you want to remove ${cart.title}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire(
                    'Deleted!',
                    `${cart.title} has been deleted.`,
                    'success'
                    )

                    console.log(cart)
                    this.carts.splice(index, 1) 
                }
            })             
        },
    },

     computed: {
        total(){
            return this.carts.reduce((acc, cart) => acc + cart.sub, 0);
        }
    },
}
</script>

<style lang="scss" scoped>
    .item-img{
        width: 100px;
    }

    .cart-form{
        width: 50px !important;
        height: 35px !important;
    }

</style>
<template>
    <div class="bg-dark footer">
        <footer class="container">
            <div class="row text-white">
                <div class="col-12 col-md-6 mb-lg-0 mb-5">
                    <h3 class="">Sky Book Store</h3>
                    <div class="mt-4 ps-2">
                        <ul class="list-inline">
                            <li>
                                <i class="fas fa-map-marker-alt me-2 text-secondary"></i>
                                <span>
                                    No (12) Ma Ma Street , Sanchaung Township, Yangon.
                                </span>
                            </li>
        
                            <li>
                                <i class="fas fa-phone-square-alt text-success me-2"></i>
                                <span>
                                    +959421711011, +9577799952
                                </span>
                            </li>
                            <li>
                                <i class="far fa-envelope text-danger me-1"></i>
                                <a href="" class="text-decoration-none text-white">
                                    skybookstore@gmail.com
                                </a>
                            </li>
        
                            <li>
                                <i class="fab fa-facebook-f text-primary me-2"></i>
                                <a href="" class="text-decoration-none text-white">
                                    SkyBook Myanmar Page
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        
                <div class="col-6 col-md-3">
                    <h3>Support</h3>
                    <div class="mt-4 ps-2">
                        <ul class="list-inline">
                            <li>Contact</li>
                            <li>Delivery System</li>
                            <li>Free Return</li>
                            <li>Shipping Rate</li>
                        </ul>
                    </div>
                </div>
        
                <div class="col-6 col-md-3">
                    <h3>Useful Links</h3>
                    <div class="mt-4 ps-2">
                        <ul class="list-inline">
                            <li>How to order</li>
                            <li>Office Stationery</li>
                            <li>Book Box Set & Collections</li>
                        </ul>
                    </div>
                </div>
            </div>
        
            <div class="row mt-3 mt-lg-0 align-items-center">
                <div class="col-6 payment-icon">
                    <img src="../assets/img/payment/visa.png" alt="Visa" class="me-2" style="width: 40px;">
                    <img src="../assets/img/payment/wave.png" alt="WaveMoney" class="w-25">
                </div>
        
                <div class="col-6 text-white mt-3">
                    <small class="">Copyright © 2021 Sky Book Store | Powered by The Creator Myanmar</small>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.footer{
    padding-top: 80px;
    
    ul{
        li{
            margin-bottom: 5px;
        }
    }
}
</style>
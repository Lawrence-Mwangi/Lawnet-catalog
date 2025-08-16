<script setup>
    import Navbar from '@/components/NavbarComponents.vue'
    import Footer from '@/components/FooterComponents.vue'
    import { products } from '@/product.js'

    const whatsappNumber = "254799509242"

    const whatsappLink = (productName) => {
    const message = `Hello, I'm interested in your product: ${productName}. Can you give me more details?`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    }
</script>

<template>
    <Navbar/>
    
    <div class="product_container main_container">
        <h2>Our Products</h2>
        <div class="product_infor">
            <div class="product_content" v-for="product in products" :key="product.id">
    
                <div class="product_card">
                    <div class="img">
                        <img :src="product.image" alt="">
                    </div>
                    <h3>{{ product.name }}</h3>
                    <p>{{ product.description }}</p>
                    <div class="product_items">
                        <p>{{  product.color }}</p>
                        <p class="price">ksh. {{ product.price }}</p>
                    </div>
    
                    <div class="whatapp">
                        <a :href="whatsappLink(product.name)" target="_blank">
                            <i class="fab fa-whatsapp"></i> Inquire
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>
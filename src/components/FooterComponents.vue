<script setup>
// import { ref } from 'vue';

const startYear = 2025; // The year your business started
const currentYear = new Date().getFullYear();

const yearDisplay = startYear === currentYear ? `${startYear}` : `${startYear}-${currentYear}`;
</script>

<template>
    <div class="footer_container">
        <div class="footer_content">
            <div class="footer_infor">
                <img :src="$company.logo" alt="{{ $company.name }}">
                <h3>{{ $company.name }}</h3>
                <p>{{ $company.tagline }}</p>
                <p>{{ $company.email }}</p>
                <p>{{  $company.phone }}</p>
                <p>{{ $company.address }}</p>
            </div>

            <div class="footer_links">
                <h3>Links</h3>
                <ul>
                    <li><router-link :to="{ name: 'product' }">Product</router-link></li>
                    <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                    <li><router-link :to="{ name: 'about' }">About</router-link></li>
                    <li><router-link :to="{ name: 'product' }">Blog</router-link></li>
                </ul>
            </div>
            
            <div class="footer_socials">
                <h3>Social Media</h3>
                <div class="footer_media">
                    <a :href="$company.socials.instagram" target="_blank">
                        <img src="../assets/image/instagram.png" alt="Instagram Icon">
                    </a>

                    <a :href="$company.socials.tiktok" target="_blank">
                        <img src="../assets/image/tik-tok.png" alt="Instagram Icon">
                    </a> 

                    <a :href="$company.socials.youtube" target="_blank">
                        <img src="../assets/image/youtube.png" alt="Instagram Icon">
                    </a>

                    <a :href="$company.socials.facebook" target="_blank">
                        <img src="../assets/image/facebook.png" alt="Instagram Icon">
                    </a>

                </div>
            </div>
        </div>
        <hr>
        <p class="footer">&copy;  {{ yearDisplay }} | {{ $company.name }} | All Rights Reserved </p>
    </div>
</template>
<script setup>
    import { companyInfo } from '@/companyInfo';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const isResponsive = ref(false);
    const router = useRouter();

    const toggleMenu = () => {
    isResponsive.value = !isResponsive.value;
    };

    const navigate = (sectionId) => {
    if (sectionId === 'home' || sectionId === 'about' || sectionId === 'service' || sectionId ==='Contact') {
        router.push({ name: sectionId });
        isResponsive.value = false; 
    }
    };

</script>

<template>
    <div class="navbar_container">
        <div class="navbar_content">
            <img :src="companyInfo.logo" :alt="companyInfo.name">
            <router-link :to="{ name: 'home' }"  class="no-underline">{{ $company.name }}</router-link>
        </div> 
        
        <div class="navbar_links" :class="{ 'responsive': isResponsive }">
            <ul :class="{ 'show': isResponsive }">
                <li><router-link :to="{ name: 'about' }" @click="navigate('about')">About</router-link></li>
                <li><router-link :to="{ name: 'product'}" @click="navigate('product')">Product</router-link></li>
                <li> <router-link :to="{ name: 'contact'}" @click="navigate('contact')">Contact</router-link></li>
            </ul>
        </div>

        <div class="burger" @click="toggleMenu" :class="{ 'active': isResponsive }">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script setup>

</script>
<template>
    <div class="hero_container">
        <div class="hero_container">
            <video autoplay muted loop playsinline>
                <source src="../assets/videos/epoxy.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="overlay"></div>
            <div class="hero_content">
                <h1>Welcome to {{ $company.name }}</h1>
                <p>{{  $company.tagline }}</p>

                <div class="button">
                    <div class="btn1">
                        <RouterLink :to="{ name: 'product' }">Product</RouterLink>
                    </div>
                    <div class="btn1">
                        <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
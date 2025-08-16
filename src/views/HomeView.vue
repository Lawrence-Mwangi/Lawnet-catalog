<script setup>
	import Navbar from '@/components/NavbarComponents.vue'
	import Hero from '@/views/HeroView.vue'
	import Content from '@/views/ContentView.vue'
	import Footer from '@/components/FooterComponents.vue'
</script>

<template>
	<Navbar/>
	
	<Hero/>

	<div class="main_container">
		<Content/>
	</div>

	<Footer/>
</template>

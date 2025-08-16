<script setup>
  import Navbar from '@/components/NavbarComponents.vue'
  import Footer from '@/components/FooterComponents.vue'

</script>

<template>
    <Navbar/>
  
    <div class="about_container main_container">
        <h2>About Us</h2>

        <div class="about_history">
            <div class="about">
                <div class="image">
                    <img src="../assets/image/about_us.jpg" alt="Guitar image">
                </div>
                <div class="about_infor">
                    <p>At Lawnet Decor, we design and craft unique epoxy resin products, from elegant wall clocks and tables to 
                        stylish chessboards and keychains. Each piece blends durability with modern design, making it perfect
                        for homes, offices, or gifting.
                    </p>
                    
                    <p>Our goal is to create products that are both functional and visually striking, 
                        bringing creativity and elegance into everyday spaces.
                    </p>
                </div>
            </div>
        </div>

        <div class="our_goals">
            <h2>Our Goals</h2>

            <div class="goals_infor">
                <div class="mission">
                    <h4>Our Mission</h4>
                    <p>To craft unique, high-quality epoxy resin products that combine functionality with 
                        artistic design, delighting customers and enhancing everyday spaces.
                    </p>
                </div>

                <div class="vision">
                    <h4>Our Vision</h4>
                    <p>To be recognized as a leading creator of innovative and stylish resin decor products, 
                        inspiring beauty and creativity in every home and office.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>



<script setup>
    import { ref, onMounted } from "vue"

    const statsSection = ref(null)
    let animated = false

    const stats = ref([
    { label: "Happy Clients", target: 120, current: 0 },
    { label: "Completed Projects", target: 80, current: 0 },
    { label: "Years of Experience", target: 5, current: 0 },
    ])

    const animateCount = (stat, duration = 2000) => {
    let start = 0
    const stepTime = Math.abs(Math.floor(duration / stat.target))
    const timer = setInterval(() => {
        start++
        stat.current = start
        if (start >= stat.target) clearInterval(timer)
    }, stepTime)
    }

    onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        if (entries[0].isIntersecting && !animated) {
            stats.value.forEach(stat => animateCount(stat))
            animated = true
        }
        },
        { threshold: 0.5 }
    )

    if (statsSection.value) {
        observer.observe(statsSection.value)
    }
    })
</script>

<template>
    <div class="content_container">
        <h2>Why Choose Us </h2>
        <div class="content_why">
            <div class="content_infor">
                <div class="icon">
                    <i class="fas fa-gem"></i>
                    <h4>Handmade Quantity</h4>
                </div>
                <P>Every epoxy resin piece is crafted with care and 
                    precision to ensure top durability and beauty.
                </P>
            </div>

            <div class="content_infor">
                <div class="icon">
                    <i class="fas fa-paint-brush"></i>
                    <h4>Custom Designs</h4>
                </div>
                <P>We create unique pieces tailored to your space, 
                    style, and personal preferences.
                </P>
            </div>

            <div class="content_infor">
                <div class="icon">
                    <i class="fas fa-tags"></i>
                    <h4>Affordable</h4>
                </div>
                <P>High-quality epoxy resin work at prices that fit your budget.</P>
            </div>
        </div>

        <div class="about_infor">
            <h2>About Us</h2>

            <div class="about_data">
                <div class="image">
                    <img src="../assets/image/about_us.jpg" alt="">
                </div>
                <div class="about_para">
                    <p>At {{ $company.name }}, we transform ordinary surfaces into timeless pieces of art. 
                        Whether it’s a stunning epoxy resin table, a unique countertop, or custom décor
                        accents, every creation is built to leave a lasting impression.  
                    </p>

                    <p>Our work blends elegance with durability, ensuring that each piece is not only beautiful
                        but also practical for everyday use. With passion, precision, and a touch of creativity,
                        we bring your ideas to life turning simple designs into extraordinary masterpieces.
                    </p>
                    
                    <div class="btn">
                        <RouterLink :to="{ name: 'about'}">Learn More ..</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="project_content">
            <h2>Our Projects</h2>
            <p>Discover some of our recent epoxy resin creations, 
                blending durability with timeless design.
            </p>
            <div class="project_infor">
                <div class="project_card">
                    <div class="img">
                        <img src="../assets/image/chessboard.jpg" alt="Chessboard Image">
                    </div>

                    <h4>Chessboard Set</h4>
                    <p>A handcrafted epoxy resin chessboard that combines elegance and durability. 
                        Perfect for both play and display, bringing art into every move.
                    </p>

                    <div class="button">
                        <a href="http://wa.me/254799509242" target="_blank">Inquire</a>
                    </div>
                </div> 

                <div class="project_card">
                    <div class="img">
                        <img src="../assets/image/wallclock2.jpeg" alt="Chessboard Image">
                    </div>

                    <h4>Wall Clock</h4>
                    <p>Turn every glance at the time into an art experience. Our epoxy resin wall 
                        clocks blend function with timeless design.
                    </p>

                    <div class="button">
                        <a href="http://wa.me/254799509242" target="_blank">Inquire</a>
                    </div>
                </div> 

                <div class="project_card">
                    <div class="img">
                        <img src="../assets/image/keychain1.jpeg" alt="Chessboard Image">
                    </div>

                    <h4>Keychains</h4>
                    <p>Carry a touch of resin art wherever you go. Our custom epoxy keychains are stylish, 
                        durable, and uniquely crafted for your Keys.
                    </p>

                    <div class="button">
                        <a href="http://wa.me/254799509242" target="_blank">Inquire</a>
                    </div>
                </div> 
            </div>
            <div class="button">
                <button>
                    <RouterLink :to="{ name: 'product' }">view More ..</RouterLink>
                </button>
            </div>
        </div>

        <div class="our_work stats" ref="statsSection">
            <h2>Our Experience</h2>

            <div class="stats_container">
                <div class="work_card stat" v-for="(stat, index) in stats" :key="index">
                    <h5>{{ stat.current }} +</h5>
                    <p>{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
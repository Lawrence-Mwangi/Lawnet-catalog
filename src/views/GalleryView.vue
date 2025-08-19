<script setup>
    import Navbar from '@/components/NavbarComponents.vue'
    import Footer from '@/components/FooterComponents.vue'
</script>

<template>
    <Navbar/>

    <div class="gallery_container main_container">
        <h2>Our Gallery</h2>

        <div class="gallery_content">
            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/chessboard.jpg" alt="Gallery Image">
                </div>
                <h4>Title: <span>Chessboard Set</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/clock1.jpeg" alt="Gallery Image">  
                </div>
                <h4>Title: <span>Wall Clock</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/bookset1.jpeg" alt="Gallery Image">
                </div>
                <h4>Title: <span>Note Book Set</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/phone.jpg" alt="Gallery Image"> 
                </div>
                <h4>Title: <span>Phone Holder</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/lamp.jpg" alt="Gallery Image">                   
                </div>
                <h4>Title: <span>Bed Lamp</span></h4>
            </div>

             <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/logo.jpg" alt="Gallery Image">  
                </div>
                <h4>Title: <span>Chess Set</span></h4>
            </div>
        </div>

        <div class="gallery_project">
            <h2>Our Projects</h2>

            <div class="project_content">
                <div class="project_item">
                    <iframe src="" frameborder="0"></iframe>
                    <!-- <div class="gallery_image">
                        <img src="/public/logo.jpg" alt="Gallery Image">  
                    </div> -->
                </div>

                <div class="project_item">
                    <iframe src="" frameborder="0"></iframe>
                    <!-- <div class="gallery_image">
                        <img src="/public/logo.jpg" alt="Gallery Image">  
                    </div> -->
                </div>
            </div>
        </div>

    </div>


    <Footer/>
</template>
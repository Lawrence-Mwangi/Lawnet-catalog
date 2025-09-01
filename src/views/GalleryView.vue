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
                    <img src="/public/assets/images/chessboard1.jpeg" alt="Gallery Image">
                </div>
                <h4>Title: <span>Chessboard Set</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/clock4.jpeg" alt="Gallery Image">  
                </div>
                <h4>Title: <span>Wall Clock</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/notebook.jpeg" alt="Gallery Image">
                </div>
                <h4>Title: <span>Note Book Set</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/phoneholder.jpeg" alt="Gallery Image"> 
                </div>
                <h4>Title: <span>Phone Holder</span></h4>
            </div>

            <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/lamp1.jpeg" alt="Gallery Image">                   
                </div>
                <h4>Title: <span>Bed Lamp</span></h4>
            </div>

             <div class="gallery_item">
                <div class="gallery_image">
                    <img src="/public/assets/images/chessset.jpeg" alt="Gallery Image">  
                </div>
                <h4>Title: <span>Chess Set</span></h4>
            </div>
        </div>

        <div class="gallery_project">
            <h2>Our Projects</h2>

            <div class="project_content">
                <div class="project_item">
                    <iframe
                        src="https://www.youtube.com/embed/93INfotpxmA?si=0PjtdZE49Y7zf3B4"
                        title="Embedded content"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        sandbox="allow-scripts allow-same-origin" class="frame">
                    </iframe>
                </div>

                <div class="project_item">
                    <iframe
                        src="https://www.youtube.com/embed/CA3LXwXQTPA?si=Proa0-PxsL5Vkddv"
                        title="Embedded content"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        sandbox="allow-scripts allow-same-origin" class="frame">
                    </iframe>
                </div>

                <div class="project_item">
                    <iframe
                        src="https://www.youtube.com/embed/FCqHfyUf3No?si=IyysjRSOTXG5S7S0"
                        title="Embedded content"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        sandbox="allow-scripts allow-same-origin" class="frame">
                    </iframe>
                </div>

                <div class="project_item">
                    <iframe
                        src="https://www.youtube.com/embed/jgh1pcNYaSU?si=5saFy9T9p6X9Uotv"
                        title="Embedded content"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        sandbox="allow-scripts allow-same-origin" class="frame">
                    </iframe>
                </div>

                <div class="project_item">
                    <iframe
                        src="https://www.youtube.com/embed/vHLZqz3puPA?si=orILU_C1sH2joKIw"
                        title="Embedded content"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        sandbox="allow-scripts allow-same-origin" class="frame">
                    </iframe>
                </div>

                <div class="project_item">
                    <iframe 
                        src="https://www.youtube.com/embed/b0tDSFMuAok?si=Pmf_kIAcGgshdCFW" 
                        title="Embedded content"
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        sandbox="allow-scripts allow-same-origin" class="frame">
                    </iframe>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>
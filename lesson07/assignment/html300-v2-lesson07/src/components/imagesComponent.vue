<template>
    <container>
        <!-- Top 3 Page Title -->
        <div class="text-center my-5">
            <h1 class="display-4 text-primary"> {{ title }} </h1>
        </div>

        <!-- Create a carousel for the images -->
        <b-carousel id="carousel-fade" fade indicators controls img-width="100vw">

            <!-- Go through the images and add them to the carousel -->
            <b-carousel-slide v-for="image in carouselImages" :key="image.id" :img-src="image.src" :img-alt="image.alt">
            </b-carousel-slide>
        </b-carousel>

        <!-- Add images based on if they're left, right or centered -->
        <div class="clearfix">
            <b-img v-for="image in imageBlock" :key="image.id" :src="image.src" :img-alt="image.alt" :left="image.left"
                :right="image.right" :center="image.center" rounded>
            </b-img>
        </div>

        <!-- Can make image fluid just by adding it to the b-img -->
        <b-img :src="top3musubi.src" :alt="top3musubi.alt" fluid></b-img>
    </container>
</template>

<script>
export default {
    name: "imagesComponent",
    data: () => {
        return {
            title: 'Our Top 3 Musubis',
            carouselImages: [
                {
                    src: require('@/assets/top3musubi.jpg'),
                    alt: "teriyaki chicken musubi, chicken katsu musubi, spam musubi on a banana leaf"
                },
                {
                    src: require('@/assets/Spam-Musubi.jpg'),
                    alt: "spam and rice, wrapped in nori"
                },
                {
                    src: require('@/assets/Chicken-Teriyaki-Musubi.jpg'),
                    alt: "grilled chiken with teriyaki sauce and rice wrapped in nori"
                },
                {
                    src: require('@/assets/Chicken-Katsu-Musubi.jpg'),
                    alt: "chicken katsu and rice, wrapped in nori"
                },
            ],
            imageBlock: [
                {
                    src: require('@/assets/top-1.jpg'),
                    alt: 'A Spam Musubi',
                    left: true,
                    right: false,
                    center: false
                },
                {
                    src: require('@/assets/top-2.jpg'),
                    alt: 'A Teriyaki Chicken Musubi',
                    left: false,
                    right: true,
                    center: false
                },
                {
                    src: require('@/assets/top-3.jpg'),
                    alt: 'A Chicken Katsu Musubi',
                    left: false,
                    right: false,
                    center: true
                },
            ],
            top3musubi: {
                src: require('@/assets/alohaBanner.jpg'),
                alt: "colorful aloha banner "
            }
        };
    },
};
</script>

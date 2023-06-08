<template>
    <div>
        <!-- Menu Page Title -->
        <div class="text-center my-5">
            <h1 class="display-4 text-primary"> {{ title }} </h1>
        </div>

        <!-- Create a carousel for the images -->
        <b-carousel id="carousel-fade" fade controls>

            <!-- Pulling images from the carouselImages and adding them to the carousel -->
            <b-carousel-slide v-for="image in carouselImages" :key="image.id" :img-src="image.src" :img-alt="image.alt">
            </b-carousel-slide>

        </b-carousel>

        <br>

        <b-container>
            <b-row>
                <!-- For each item in items, set up the menu item card from the Menu Item Cards file -->
                <MenuitemCards v-for="(itemList, index) in items" :key="index" :itemList="itemList"
                    :img_src="itemList.img_src" :img_alt="itemList.img_alt" :title="itemList.title" :desc="itemList.desc"
                    :btn_text="itemList.btn_text" />
            </b-row>
        </b-container>

    </div>
</template>

<script>
import MenuitemCards from './menuitemCards.vue';

export default {
    name: "imagesComponent",

    data: () => {
        return {
            title: "Stop By and Grab a Bite",
            carouselImages: [
                {
                    src: require("@/assets/alohaBanner.jpg"),
                    alt: "colorful aloha banner "
                },
                {
                    src: require("@/assets/top3musubi.jpg"),
                    alt: "teriyaki chicken musubi, chicken katsu musubi, spam musubi on a banana leaf"
                },
                {
                    src: require("@/assets/Spam-Musubi.jpg"),
                    alt: "spam and rice, wrapped in nori"
                },
                {
                    src: require("@/assets/Chicken-Teriyaki-Musubi.jpg"),
                    alt: "grilled chiken with teriyaki sauce and rice wrapped in nori"
                },
                {
                    src: require("@/assets/Chicken-Katsu-Musubi.jpg"),
                    alt: "chicken katsu and rice, wrapped in nori"
                },
            ],
            items: [
                {
                    img_src: require("@/assets/top-1.jpg"),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-2.jpg"),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-3.jpg"),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-1.jpg"),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-2.jpg"),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-3.jpg"),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-1.jpg"),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-2.jpg"),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-3.jpg"),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-1.jpg"),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-2.jpg"),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
                {
                    img_src: require("@/assets/top-3.jpg"),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient",
                    btn_text_buy: "Buy",
                    btn_text_more: "Select"
                },
            ]
        };
    },
    components: { MenuitemCards }
};
</script>

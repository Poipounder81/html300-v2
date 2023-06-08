<template>
    <div>

        <!-- Create the jumbotron -->
        <b-jumbotron header-level="1" variant="text-center rounded-lg">

            <!-- jumbotron header and welcome message -->
            <template #header> {{ headerText }} <span class="text-primary"> {{ colorText }} </span> {{ headerText2 }}
            </template>
            <template #lead>{{ leadText }} </template>

            <hr class="my-4">

            <p>{{ jumbotronText }}</p>

            <br>

            <!-- jumbotron top 3 musubi advertisement -->
            <div class="container text-center">
                <b-img :src="top3musubi.src" :alt="top3musubi.alt" fluid></b-img>
                <h4 class="text-primary"> {{ advertisementText }} </h4>
            </div>

            <br>

            <!-- jumbotron bootstrap button  -->
            <div class="btnContainer">
                <b-button variant="outline-primary" size="lg" href="#" class="homeBtn" id="button-1"
                    @click="btnClicked = !btnClicked">
                    <span class="text-dark"> {{ btnPersonal }} </span>
                </b-button>
                <b-button variant="outline-primary" size="lg" href="#" class="homeBtn" id="button-2"
                    @click="btnClicked = !btnClicked">
                    <span class="text-dark"> {{ btnMenu }} </span>
                </b-button>
                <b-button variant="outline-primary" size="lg" href="#" class="homeBtn" id="button-3"
                    @click="btnClicked = !btnClicked">
                    <span class="text-dark"> {{ btnBlog }} </span>
                </b-button>
            </div>
        </b-jumbotron>

        <!-- Show an alert if the user clicks the button -->
        <b-alert show variant="danger" v-if="btnClicked">{{ alert }}</b-alert>
        <p v-else>{{ placeholder }}</p>
        <b-tooltip target="button-1" placement="bottom"> {{ tooltipText }} <span class="text-primary"> {{ colorText }}
            </span></b-tooltip>
        <b-tooltip target="button-2" placement="bottom"> {{ tooltipText }} <span class="text-primary"> {{ colorText }}
            </span></b-tooltip>
        <b-tooltip target="button-3" placement="bottom"> {{ tooltipText }} <span class="text-primary"> {{ colorText }}
            </span></b-tooltip>

    </div>
</template>

<script>
export default {
    name: "homeComponent",

    data: () => {
        return {
            headerText: "206 ",
            headerText2: "Shop",
            colorText: "Musubi",
            leadText: "Welcome to the 206 Musubi Shop",
            jumbotronText: "If you love Hawaii and all things delicious, you’re in luck! A delicious and easy homemade Hawaiian Spam Musubi is just one of the great things you can try.",
            advertisementText: "Click on the Menu link to find out our top 3 popular musubi",
            btnPersonal: "About Us",
            btnMenu: "Menu",
            btnBlog: "Food Blog",
            tooltipText: "Live, Laugh, Love, Spam That",
            btnClicked: false,
            alert: 'This button is currently under construction. Sorry for the inconvenience. Please use links in navbar for now',
            placeholder: '© 2023 Spam Musubi Factory | Seattle, WA',
            top3musubi: {
                src: require('@/assets/top3musubi.jpg'),
                alt: "three musubi menu items"
            }
        };
    }
};
</script>

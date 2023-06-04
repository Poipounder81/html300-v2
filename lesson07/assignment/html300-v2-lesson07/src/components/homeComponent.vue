<template>
    <container>
        <!-- Create the jumbotron -->
        <b-jumbotron header-level="1" variant="text-center rounded-lg">

            <!-- jumbotron header and welcome message -->
            <template #header>
                {{ headerText }}
                <span class="text-primary"> {{ colorText }} </span>
                {{ headerText2 }}
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
            <b-button variant="dark" size="lg" href="#" id="button-1" @click="btnClicked = !btnClicked">
                <span class="text-warning"> {{ btnText }} </span>
            </b-button>
        </b-jumbotron>

        <!-- Show an alert if the user clicks the button -->
        <b-alert show variant="danger" v-if="btnClicked">
            {{ alert }}
        </b-alert>
        <p v-else>
            {{ placeholder }}
        </p>
        <b-tooltip target="button-1" placement="bottom">
            {{ tooltipText }}
            <span class="text-primary"> {{ colorText }} </span>
        </b-tooltip>
    </container>
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
            advertisementText: "Click on the TOP 3 link to find out our top 3 popular musubi",
            btnText: "Copyright",
            tooltipText: "Live, Laugh, Love, Spam That",
            btnClicked: false,
            alert: 'Email Us:shortgrainrice@example.com',
            placeholder: '© 2023 Spam Musubi Factory | Seattle, WA',
            top3musubi: {
                src: require('@/assets/top3musubi.jpg'),
                alt: "three musubi menu items"
            }
        };
    }
};
</script>

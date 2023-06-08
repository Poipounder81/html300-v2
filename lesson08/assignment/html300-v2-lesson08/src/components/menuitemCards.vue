<template>
    <!-- The menu items cards page layed out -->
    <b-col xs="12" md="6" lg="4" xl="3">
        <b-card-group>

            <b-card deck :title="itemList.title" :img-src="itemList.img_src" :img-alt="itemList.img_alt" img-top
                tag="article" class="mb-4" :class="{ boldBorder: showBorder }">
                <!-- The menu item ingredient list(s) -->
                <b-card-text>{{ itemList.desc }}</b-card-text>
                <b-card-text>{{ itemList.desc }}</b-card-text>
                <b-card-text>{{ itemList.desc }}</b-card-text>

                <!-- adding click event to a button -->
                <div class="btnContainer">
                    <b-button href="#" variant="primary">{{ itemList.btn_text_buy }}</b-button>
                    <b-button @click="toggleBorder()" href="#" variant="outline-primary">{{ itemList.btn_text_more
                    }}</b-button>
                </div>
            </b-card>
        </b-card-group>
    </b-col>
</template>
  
<script>
import { borderMixin } from "../mixins/border.js";

export default {
    mixins: [borderMixin],
    name: "item-card",

    // props and validation for the menu item cards
    props: {
        itemList: {
            type: Object,
            requred: true,
        },
        title: {
            type: String,
            required: true,
            default: "Menu Item Name",
        },
        desc: {
            type: String,
            required: true,
            default: "Menu Item Ingredient(s)",
        },
        btn_text_buy: {
            type: String,
            default: "Disabled",
        },
        btn_text_more: {
            type: String,
            default: "Disabled",
        },
        img_src: {
            type: String,
        },
        img_alt: {
            type: String,
            required: true,
            default: "Image Description",
        },
    },
};
</script>
  
  <!-- CSS needs to be scoped to override bootstrap card border -->
<style scoped>
.boldBorder {
    border: 1px solid #027bff;
}
</style>
  
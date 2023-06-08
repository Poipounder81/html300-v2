<template>
    <b-container>
        <!-- Food blog post page title -->
        <div class="text-center my-5">
            <h1 class="display-4 text-primary">{{ pageTitle }}</h1>
        </div>

        <div class="accordion" role="tablist">

            <!-- Pulling food blog posts data and adding them to the accordion -->
            <foodblogPosts v-for="(post, index) in blogPosts" :key="index" :post="post" :id="post.id" :title="post.title"
                :text="post.text" :first="post.first" :padding="post.padding" :imgSrc="post.imgSrc" :imgAlt="post.imgAlt" />
        </div>
    </b-container>
</template>

<script>
import foodblogPosts from './foodblogPosts.vue';

export default {
    name: "accordionComponent",
    components: { foodblogPosts },

    data() {
        return {
            pageTitle: 'Our Food Stories ...',
            blogPosts: [
                {
                    id: 1,
                    first: true,
                    title: 'Spam Musubi',
                    imgSrc: require('@/assets/Spam-Musubi.jpg'),
                    imgAlt: 'spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maiores deserunt dolore consequatur libero, laboriosam numquam. Ut maxime dolores dolorem, cumque non incidunt laboriosam totam, modi minus qui neque dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed, eaque repudiandae ea iure ullam amet obcaecati unde laborum dolorem ratione ipsa! Cupiditate esse, atque quae assumenda incidunt accusamus nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis, animi, fugiat nesciunt maxime consequatur dignissimos ducimus officiis est blanditiis laborum accusamus? Omnis consequuntur ab quisquam ut nihil perferendis. Quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae culpa, maiores pariatur omnis quam placeat velit veritatis quos distinctio autem obcaecati repellat sunt illo non? Numquam iure fugit ex blanditiis.'
                },
                {
                    id: 2,
                    first: false,
                    title: 'Chicken Teriyaki Musubi',
                    imgSrc: require('@/assets/Chicken-Teriyaki-Musubi.jpg'),
                    imgAlt: 'grilled chiken with teriyaki sauce and rice wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum consequuntur enim, ipsa aspernatur quam nulla laudantium nemo magni. Iusto cum facere officia ducimus accusamus beatae ipsum aliquid! Voluptatem, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, totam? Possimus eaque inventore, earum harum magnam dolore saepe asperiores sint assumenda eligendi, autem tenetur quidem iusto quas cumque? Non, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid vero laborum fugit, qui harum id dolorem nisi odit ipsa cupiditate suscipit corrupti, repellendus nihil aliquam sit soluta enim dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque laborum, harum in mollitia perferendis excepturi minima repudiandae illum, praesentium possimus numquam facere maxime eligendi ratione, laudantium minus tempora voluptatem nisi!'
                },
                {
                    id: 3,
                    first: false,
                    title: 'Chicken Katsu Musubi',
                    imgSrc: require('@/assets/Chicken-Katsu-Musubi.jpg'),
                    imgAlt: 'chicken katsu and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil aliquid, animi blanditiis eligendi error neque tempora ad reprehenderit ducimus est aut voluptatum nemo illum necessitatibus! Ut amet et ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quos quisquam beatae exercitationem iusto aut facilis tenetur assumenda! Sint, minima! Commodi omnis eligendi minus consequuntur facilis veritatis repudiandae tempore fuga.'
                },
                {
                    id: 4,
                    first: false,
                    title: 'Avocado Bacon Egg Spam Musubi',
                    imgSrc: require('@/assets/Avocado-Bacon-Egg-Spam-Musubi.jpg'),
                    imgAlt: 'avocado bacon egg spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
                {
                    id: 5,
                    first: false,
                    title: 'Avocado Bacon Spam Musubi',
                    imgSrc: require('@/assets/Avocado-Bacon-Spam-Musubi.jpg'),
                    imgAlt: 'avocado bacon spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
                {
                    id: 6,
                    first: false,
                    title: 'Bacon Egg Spam Musubi',
                    imgSrc: require('@/assets/Bacon-Egg-Spam-Musubi.jpg'),
                    imgAlt: 'bacon egg spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
                {
                    id: 7,
                    first: false,
                    title: 'Green Shiso Herb Spam Musubi',
                    imgSrc: require('@/assets/Green-Shiso-Herb-Spam-Musubi.jpg'),
                    imgAlt: 'green shisoherb leaf spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
                {
                    id: 8,
                    first: false,
                    title: 'Kimchi Spam Musubi',
                    imgSrc: require('@/assets/Kimchi-Spam-Musubi.jpg'),
                    imgAlt: 'kimchi spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
                {
                    id: 9,
                    first: false,
                    title: 'Pickled Plum Spam Musubi',
                    imgSrc: require('@/assets/Plum-Spam-Musubi.jpg'),
                    imgAlt: 'pickled plum spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
                {
                    id: 10,
                    first: false,
                    title: 'Spam Egg Musubi',
                    imgSrc: require('@/assets/Spam-Egg-Musubi.jpg'),
                    imgAlt: 'spam egg and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
                {
                    id: 11,
                    first: false,
                    title: 'Takuan Radish Spam Musubi',
                    imgSrc: require('@/assets/Takuan-Radish-Spam-Musubi.jpg'),
                    imgAlt: 'takuan radish spam and rice, wrapped in nori',
                    padding: 'mb-5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur doloremque reiciendis quasi voluptatem, expedita at praesentium excepturi vel iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laudantium similique, dicta harum, fugit eaque consectetur pariatur assumenda aliquam maiores alias dolorem laborum est nihil ab neque corporis, officia possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore obcaecati repellendus incidunt aut, quisquam soluta autem necessitatibus assumenda ratione, earum mollitia dolore, repudiandae adipisci maxime vel ullam error. Sequi, repudiandae.'
                },
            ],
        }
    }
}
</script>
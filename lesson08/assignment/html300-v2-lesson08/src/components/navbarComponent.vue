<template>
    <!-- Set up the navbar with the primary color -->
    <b-navbar toggleable="sm" type="dark" variant="dark">

        <!-- To keep the buttons in a good position, wrap them in a container -->
        <b-container>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

                <div class="ms-auto">
                    <b-navbar-nav>
                        <!-- Add the router links and aligned right -->
                        <router-link to="/home" class="nav-link"> Home </router-link>
                        <router-link to="/grid" class="nav-link"> About Us (Grid) </router-link>
                        <router-link to="/images" class="nav-link"> Menu (Images) </router-link>
                        <router-link to="/accordion" class="nav-link"> Blog (Accordion) </router-link>
                    </b-navbar-nav>
                </div>

            </b-collapse>
        </b-container>
    </b-navbar>
</template>

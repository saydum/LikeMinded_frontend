<template>
    <div class="v-header">
          <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#"><img class="logo" src="../assets/logo.png" alt="logo"></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="nav-item" to="/">Home</router-link>
                    <router-link class="nav-item" to="/about">About</router-link> 
                </b-navbar-nav>
                    <b-button variant="outline-info">Info</b-button>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    

                    <b-nav-item-dropdown text="EN" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                         <b-icon icon="person"></b-icon>
                    </template>
                    <b-dropdown-item>
                        <router-link to="/registration">
                            Регистрация
                        </router-link>
                    </b-dropdown-item>

                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>


<script>
export default {

    name: 'v-header',

}
</script>

<style>
    .form-search {
        padding-left: 10px;
        padding-right: 10px;
    }

    .logo {
        width: 36px;
        height: 36px;
    }
    .nav-item {
        padding-left: 4px;
        padding-right: 4px;
        color: #fff;
    }
</style>
<template>
    <div class="v-card " >
        <div v-for="item in info">
        {{ item.description }}
        </div>
    </div>
</template>



<script>
// import {mapActions, mapGetters} from 'vuex';
import axios from 'axios';
export default {
    name: 'v-card',
    data() {
        return {
            info : null 
        }
    },
    // computed: {
    //     ...mapGetters([
    //         console.log(USER),
    //         'users',
    //     ])
    // },
    mounted() {
        axios
        .get('http://likeminded.lo/api/topic/')
        .then(response => (this.info = response));
    }
}
</script>

<style>
    .v-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 40px;
    }
    .card {
        margin-bottom: 30px;
        text-align: start;
    }
    .img-card {
        margin-right: 20px;
    }
    .status-icon {
        color: #2ee357;
        font-size: 13px;
    }
    .age {
        color: black;
        padding-left: 5px;
    }
    .text-card {
        display: flex;
        background-color: #e9f7e1c2;
        padding: 10px;
        margin-top: 5px;
        margin-left: 60px;
    }
    .btn-card {
        float: right;
        margin-right: 20px;
    }
    .pl {
        padding-left: 20px;
    }
</style>
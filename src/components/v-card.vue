<template>
    <div class="v-card">
        <b-card class="card" v-for="topic in topics">
            <div>
                <b-img class="img-card" v-bind="mainProps" :src="topic.user.avatar" rounded="circle" alt="Circle image"></b-img>
                <b-icon class="status-icon" icon="circle-fill"></b-icon>
                {{topic.user.name}}
            </div>
            <b-card-text class="text-card">
                {{ topic.description }}
            </b-card-text>


             <a class="btn-card btn outline-success" :href="'https://vk.com/write' + topic.user.user_id">Написать</a>
        </b-card>
    </div>
</template>



<script>
// import {mapActions, mapGetters} from 'vuex';
import axios from 'axios';
export default {
    name: 'v-card',
    data() {
        return {
            topics : null,
            mainProps: {
                width: 74,
                height: 74,
            }
        }
    },
    mounted() {
        axios
        .get('http://likeminded.lo/api/topics/')
        .then(response => (
            this.topics = response.data
        ));
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
import axios from 'axios';


const state = {
    users: [],
};

const getters = {
    users : state => {
        return state.users;
    }
}

const mutations = {
    USERS : (state, users) => {
        state.users = users
    } 
}

const actions = {
    async USERS({ commit }) {
        axios.get('http://likeminded.lo/api/topic/')
        .then( response => {
            commit('')
        })
    }
}

export default {
    state, getters, mutations, actions
}

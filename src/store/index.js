import Vue from 'vue';
import Vuex from 'vuex';
import ccommit from "./commit"
import indent from "./Indent"
// import axios from 'axios';
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        indent,
        ccommit
    }
})

export default store;
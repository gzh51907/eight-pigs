import Vue from 'vue';
import Vuex from 'vuex';

import indent from "./Indent"

Vue.use(Vuex)
const Store = new Vuex.Store({
    modules: {
        indent
    }
})

export default Store;
import axios from 'axios'
let indent = {
    state: {
        data: [],
    },
    mutations: {
        getData(state, data) {
            state.data = data.data;
        },
        Morerows(state, id) {
            console.log('ind:', id);
            state.data = state.data.filter(item => item._id !== id);
            console.log(state.data);

        }
    },
    actions: {
        async removeFromCart(context, id) {
            let {
                data
            } = await axios.delete('http://47.98.245.185:1907/cart', {
                params: {
                    _id: id
                }
            })
        },
        async ahld(context) {
            let {
                data
            } = await axios.get('http://47.98.245.185:1907/cart')
            context.commit('getData', data)
        },
    },
}
export default indent
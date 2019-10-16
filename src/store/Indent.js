// import axios from 'axios'
// import {
//     Message
// } from 'element-ui'

let indent = {
    state: {
        indentlist: [{
            id: "1",
            name: "巴厘岛梦幻之旅",
            imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            price: 5998,
            qty: 10
        }, {
            id: "2",
            name: "澳洲十日天游",
            imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
            price: 2999,
            qty: 2
        }, {
            id: "3",
            name: "环球帆船游",
            imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
            price: 3999,
            qty: 1
        }]
    },
    getters: {
        cartlength(state) {
            return state.cartlist.length;
        },
        totalPrice(state) {
            return state.cartlist.reduce((prev, item) => prev + item.price * item.qty, 0)
        },
        saleGoods(state) {
            return state.cartlist.map(item => {
                item.price *= 0.5;
                return item;
            })
        }
    },
    mutations: {
        add2cart(state, goods) {
            state.indentlist.unshift(goods)
        },
        removeFromCart(state, id) {
            state.indentlist = state.indentlist.filter(item => item.id != id)
        },
        clearindent(state) {
            state.indentlist = null;
        },
        changeQty(state, {
            id,
            qty
        }) {
            console.log('changeQty:', id, qty)
            state.indentlist.forEach(item => {
                if (item.id === id) {
                    item.qty = qty;
                }
            })
        }
    },
}

export default indent
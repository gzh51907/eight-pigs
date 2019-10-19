import axios from 'axios';
export default {
    state: {
        user: null
    },
    mutations: {
        login(state, {
            age,
            Authorization
        }) {
            state.user = {
                age,
                Authorization
            }
            localStorage.setItem('user', JSON.stringify({
                age,
                Authorization
            }))
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem("user");
        }
    },
    actions: {
        async checkLogin(context, payload) {
            let user = localStorage.getItem("user")
            if (!user) {
                context.commit('logout');
            } else {
                user = JSON.parse(user);
                let {
                    data
                } = await axios.get('http://10.3.133.73:1907/verify', {
                    headers: {
                        Authorization: user.Authorization
                    }
                })
                if (data.code === 1) {
                    context.commit('login', user);
                } else {
                    context.commit('logout');
                    return 400
                }
            }
            return 200;
        }
    }



}
import Vue from 'vue'
import Vuex from 'vuex'
import FighterAxios from './FighterAxios'

Vue.use(Vuex)

const api = FighterAxios

export const store = new Vuex.Store({
    state: {
        user: {
            id: null,
            email:null,
            name:null,
            money:0,
            fighters: []
        },
        currentFighter: null,
        fighterUpgradableSkills: ['strength','speed','stamina'],
        token: localStorage.getItem('user-token'),
    },
    mutations: {
        updateMoney: (state,payload) => {
            state.money -= payload
        },
        logout: (state) => {
            state.token = null
            localStorage.removeItem('user-token')
            localStorage.removeItem('user-email')

        },
        setUser: (state,userObj)=>{
            for(let key in userObj){
                if(state.user.hasOwnProperty(key)) {
                    state.user[key] = userObj[key]
                }
            }
        },
        setToken: (state,token) => {
            state.token = token
            api.headers = {
                'Authorization':'Token '+token
            }
        },
        setUserFighters: (state,fightersArray)=>{
            state.user.fighters = fightersArray
        }
    },
    getters: {
        getToken: state => {
            return state.token
        },
        getUser: state => {
            return state.user
        },
        getFighters: state => {
            return state.user.fighters
        },
        getCurrentFighter: state => {
            return state.currentFighter
        }
    },
    actions: {
        login: (context,payload) => {
            return new Promise((resolve,reject) => {
                api.post('/login',{
                    username: payload.email,
                    password: payload.password
                })
                .then(res => {
                    localStorage.setItem('user-token',res.data.token)
                    context.commit('setToken',res.data.token)
                    resolve(res.data.token)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })

            })
            
        },
        getUserProfile: (context,payload) =>{
            return new Promise((resolve,reject) => {
                //Still not managing to get token auth to work... getting 401 unauthorized
                api.get(`/profile?search=${payload.email}`)
                .then(res => {
                    console.log(res)
                    context.commit('setUser',res.data[0])
                    resolve('logged user updated')
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
            })
        },
        getOtherUserProfile: (context,payload) => {
            return new Promise((resolve,reject) => {
                //Still not managing to get token auth to work... getting 401 unauthorized
                api.get(`/profile?search=${payload.email}`)
                .then(res => {
                    console.log(res)
                    resolve(res.data[0])
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
            })
        },
        getUserFighters: (context,payload) => {
            return new Promise((resolve,reject)=>{
                api.get(`/fighter?search=${payload.id}`)
                .then(res => {
                    console.log(res)
                    context.commit('setUserFighters',res.data)
                    resolve()
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
            })
        }
    },
    getters: {
        isAuthenticated(state){
            return !!state.token
        }
    }
})
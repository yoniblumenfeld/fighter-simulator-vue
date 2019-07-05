<template>
    <div class="navbar">
        <nav class="blue lighten-2">
            <div class="container">
                <span><router-link :to="{name:'Profile'}" class="brand-logo left">UFC</router-link></span>
                <ul class="right">
                    <li v-if="isAuthenticated"><a>{{userEmail}}</a></li>
                    <li v-if="isAuthenticated"><a>{{money}}$</a></li>
                    <li v-if="isAuthenticated"><router-link :to="{name:'ViewFighter'}">Fighters</router-link></li>
                    <li v-if="!isAuthenticated"><router-link :to="{name:'Signup'}">Signup</router-link></li>
                    <li v-if="!isAuthenticated"><router-link :to="{name:'Login'}">Login</router-link></li>
                    <li v-if="isAuthenticated"><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
        }
    },
    methods: {
        logout(){
            console.log('logging out')
            this.$store.commit('logout')
            this.$router.push({name:'Login'})
        },
    },
    computed: {
        money(){
            return this.$store.state.user.money
        },
        isAuthenticated(){
            return this.$store.getters.isAuthenticated
        },
        userEmail(){
            return this.$store.state.user.email
        }
    },
}
</script>

<style>

</style>

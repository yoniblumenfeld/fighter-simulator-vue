<template>
    <div class="container login">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center blue-text lighten-1">Login</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="text" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <div class="field center">
                <button class="center btn blue lighten-2">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import FighterAxios from '../../store/FighterAxios'
export default {
    name:'Login',
    data(){
        return {
            feedback: null,
            email: null,
            password: null
        }
    },
    methods: {
        login(){
            console.log(this.email,this.password)
            this.$store.dispatch('login',{email:this.email,password:this.password})
            .then(res => {
                this.feedback = null
                this.$store.state.user.email = this.email
                localStorage.setItem('user-email',this.email)
                this.$store.state.token = res
                this.$store.dispatch('getUserProfile',{
                    email: this.email
                }).then(res => {
                    this.$store.state.currentFighter = this.$store.state.user.fighters[0]
                    this.$router.push({name:'ViewFighter'})
                }).catch( err => {
                    console.log('couldnt get user detais')  
                })
            }).catch(err => {
                this.feedback = "Email doesn't exist or password doesn't match"
            })
        }
    }
}
</script>

<style>
.login{
    max-width: 400px;
    margin-top: 60px;
}
.login h2{
    font-size: 2.4em;
}
.login .field{
    margin-bottom: 16px;
}
</style>

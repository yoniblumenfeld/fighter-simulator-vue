<template>
    <div class="container signup">
        <form @submit.prevent="signup" class="card-panel">
            <h2 class="center blue-text lighten-1">Sign-Up</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="text" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
                <label for="confirm_password">Confirm Password:</label>
                <input type="password" name="confirm_password" v-model="confirm_password">
            </div>
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <div class="field center">
                <button class="center btn blue lighten-2">SIGNUP</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'Signup',
    data(){
        return {
            feedback: null,
            email: null,
            name: null,
            password: null,
            confirm_password: null
        }
    }
}
</script>

<style>

.signup{
    max-width: 400px;
    margin-top: 60px;
}
.signup h2{
    font-size: 2.4em;
}
.signup .field{
    margin-bottom: 16px;
}

</style>

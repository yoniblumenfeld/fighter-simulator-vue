<template>
    <div class="container editprofile">
        <form @submit.prevent="editprofile" class="card-panel">
            <h2 class="center blue-text lighten-1">Edit Profile</h2>
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
                <button class="center btn blue lighten-2">UPDATE</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'EditProfile',
    data(){
        return {
            feedback: null,
            email: null,
            password: null,
            confirm_password: null
        }
    }
}
</script>

<style>

.editprofile{
    max-width: 400px;
    margin-top: 60px;
}
.editprofile h2{
    font-size: 2.4em;
}
.editprofile .field{
    margin-bottom: 16px;
}

</style>

<template>
    <div class="container character-window">
        <div class="card-panel">
            <span class="card-title left">{{characterName}}</span>
            <span class="card-title right">CharacterLevel</span>
            <div class="card-content center">
                <img class="image center" src="@/assets/sample_avatar.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ViewFighter',
    data(){
        return {
        }
    },
    computed: {
        characterName(){
            return this.$store.state.currentFighter.name
        },
    }
}
</script>

<style>

.character-window .card-panel{
    margin-top:50px;
    width: 100%;
}
.character-window .image{
    margin: 30px auto;
    width: 250px;
    height: 250px;
    position: relative;
       
}
</style>

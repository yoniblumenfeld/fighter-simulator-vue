<template>
    <div class="switch-fighters container">
        <h3>Switch Fighters</h3>
        <button @click="prevFighter">PREV FIGHTER</button>
        <button @click="nextFighter">NEXT FIGHTER</button>
    </div>
</template>

<script>
export default {
    name: 'SwitchFighters',
    data(){
        return {
            
        }
    },
    computed: {
    },
    methods: {
        nextFighter(){
            let fighters_arr_ref = this.$store.state.user.fighters
            for(let i = 0; i < fighters_arr_ref.length; i++){
                if(fighters_arr_ref[i].id == this.$store.state.currentFighter.id){
                    console.log('switching to next fighter')
                    let new_fighter_index = fighters_arr_ref.length-1 == i ? 0 : i+1
                    this.$store.state.currentFighter = fighters_arr_ref[new_fighter_index]
                    break

                }
            }
        },
        prevFighter(){
            let fighters_arr_ref = this.$store.state.user.fighters
            for(let i = 0; i < fighters_arr_ref.length; i++){
                if(fighters_arr_ref[i].id == this.$store.state.currentFighter.id){
                    console.log('switching to previous fighter')
                    let new_fighter_index = 0 == i ? fighters_arr_ref.length-1 : i-1
                    this.$store.state.currentFighter = fighters_arr_ref[new_fighter_index]
                    break

                }
            }   
        }
    }
}
</script>

<style>

</style>

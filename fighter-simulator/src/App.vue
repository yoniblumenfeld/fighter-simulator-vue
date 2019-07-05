<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
  },
  created(){
        console.log(this.$store.state)
        if(localStorage.getItem('user-token')){
                this.$store.dispatch('getUserProfile',{
                email: localStorage.getItem('user-email'),
            }).then(()=>{
              this.$store.dispatch('getUserFighters',{id:this.$store.state.user.id})
                .then(res => {
                    this.$store.state.currentFighter = this.$store.state.user.fighters[0]
                    console.log('Fighters loaded successfuly')
                })
                .catch(err => {
                    console.log('Fighters didnt load!')
`      `        })
            })
        }
    }
}
</script>

<style>
#app body{
  background: yellow;
}

</style>

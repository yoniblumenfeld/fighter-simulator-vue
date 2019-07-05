<template>
    <div class="container view-fighter">
        <div class="container">
            <SwitchFighters />
            <CharacterWindow />
            <SkillsWindow />
        </div>
>
    </div>
</template>

<script>
import SwitchFighters from './SwitchFighters'
import CharacterWindow from './CharacterWindow'
import SkillsWindow from './SkillsWindow'
export default {
    name:'ViewFighter',
    components: {
        CharacterWindow,
        SkillsWindow,
        SwitchFighters
    },
    data(){
        return {

        }
    },
    computed:{
        userFighters(){
            return this.$store.state.user.fighters
        }
    },
    beforeMounted(){
    }
}
</script>

<style>
</style>

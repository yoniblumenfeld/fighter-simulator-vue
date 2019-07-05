<template>
    <div class="container skills-window">
        <form class="card-panel center" @submit.prevent="upgrade">
            <div v-for="(skill,index) in skills" :key="index" class="range-field">
                <label for="">{{skill.name}} - {{skill.level}} ({{skill.level-skill.currentLevel}})</label>
                <input type="range" min="0" max="100" v-model="skill.level" step="1">
            </div>
            <div class="field">
                <label for="">Experience</label>
                <p>{{ experience }}</p>
            </div>
            <div class="field">
                <button class="btn blue lighten-2 white-text" type="submit">UPGRADE {{ currentUpgradePrice }}$</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:'SkillsWindow',
    data(){
        return {
            price: 0,
        }
    },
    methods: {
        upgrade(){
            this.$store.commit('updateMoney',this.price)
            this.skills.forEach(skill => {
                skill.currentLevel = skill.level
            })
        }
    },
    
    computed: {
        skills(){
            let skillsArray = [];
            this.$store.state.fighterUpgradableSkills.forEach(skillName => {
                skillsArray.push({
                    name: skillName,
                    level:this.$store.state.currentFighter[skillName],
                    currentLevel:this.$store.state.currentFighter[skillName]
                })
            })
            return skillsArray
        },
        currentUpgradePrice(){
            let price = 0
            this.skills.forEach(skill => {
                price += parseInt(skill.level) - parseInt(skill.currentLevel)
                
            })
            this.price = price
            return price
        },
        experience(){
            return this.$store.state.currentFighter.experience
        },
        
    },
    
}
</script>

<style>
.skills-window .card-panel{
    width: 100%;
}
.skills-window .card-panel .field p{
    color: #5554df
}
</style>

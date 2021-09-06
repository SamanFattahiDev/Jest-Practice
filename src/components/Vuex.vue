<template>
    <div class="Counter-Container">
        <button class="button" @click="Increment()">Increment</button>
        <p>{{ShowVuex}}</p>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data(){
            return{

            }
        },
        computed:{
            ShowVuex(){
                return this.$store.getters.ShowCount
            }
        },
        methods:{
            Increment(){
            this.$store.commit('Increment')
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="Counter-Container">
        <button class="button" @click="Increment()">Increment</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        emits:['SendC'],
        data(){
            return{

            }
        },
        methods:{
            Increment(){

                this.$emit('SendC')
            }
        }
    }
</script>

<style scoped>

</style>
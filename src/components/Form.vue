<template>
    <div>
        <input class="Input" type="email" v-model="email" />

        <button @click="submit">Submit</button>
    </div>
</template>

<script>
    export default {
        name:'Form',
        emits:['submit'],
        data() {
            return {
                email: ''
            }
        },
        methods: {
            submit() {
                this.$emit('submit', this.email)
            }
        }
    }
</script>
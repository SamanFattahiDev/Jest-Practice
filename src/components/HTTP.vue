<template>

    <ul>
        <button @click="getPosts">Get posts</button>
        <li v-for="post in posts" :key="post.id" data-test="post">
            {{ post.title }}
        </li>
        <div class="message">
            <p>{{message}} , {{P}}</p>
        </div>
    </ul>
</template>

<script>
    import axios from 'axios'

    export default {
        props:['P'],
        data() {
            return {
                posts: null,
                message:'from component'
            }

        },
        methods: {
            async getPosts() {
                this.posts = await axios.get(' https://jsonplaceholder.typicode.com/posts')
            }
        }
    }
</script>
<template>
  <div>
    <div data-test="Container" v-for="todo in todos" :key="todo.id" :class="{Green : todos.completed}" >
      {{ todo.text }}
      <input type="checkbox" data-test="Check" v-model="todos.completed">
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
    <br>
    <div>
      <h1 v-if="Showen" data-test="h1">this is a v-if test</h1>
    </div>
    <br>
    <div class="Counter-Component-Container">
      <Counter @SendC="Increment()"></Counter>
      <h2>{{Count}}</h2>
    </div>
    <br>
    <Form @submit="ShowEmail($event)"></Form>
    <h2>{{Email}}</h2>
    <br>
    <div class="Password">
      <input type="password" v-model="Password">
      {{Password}}
      <h2 style="color: red" v-if="errorD">{{error}}</h2>
    </div>
    <br>
    <HTTP :P="propd"></HTTP>
    <br>


  </div>
</template>

<script>
  import Form from "../components/Form";
  import Counter from "../components/Counter";
  import HTTP from "../components/HTTP";
  import Vuex from '../../src/components/Vuex'

  export default {
    name: 'TodoApp',
    components: {Counter,Form,HTTP,Vuex},
    data() {
      return {
        propd:'from props',
        errorD:false,
        Password:'',
        newTodo: '',
        Email:'',
        todos: [
          {
            id: 1,
            text: 'Learn Vue.js 3',
            completed: false
          }
        ],
        Showen:true,
        Count:0

      }
    },

    methods: {
      createTodo() {
        this.todos.push({
          id: 2,
          text: this.newTodo,
          completed: false
        })
      },
      Increment() {
        this.Count ++

      },
      ShowEmail(email){
        this.Email = email
      }
    },
    computed:{
      error() {
        let result=''
        if (this.Password.length < '10'){
         result = 'fuck you'
        }
        return result

      }
    }
  }
</script>

<style>
  .Green{
    color: green;
  }
</style>
import {mount,flushPromises} from '@vue/test-utils'
import axios from 'axios'

import Home from '../../src/views/Home'
import Counter from "../../src/components/Counter";
import Form from "../../src/components/Form";
import HTTP from '../../src/components/HTTP'
import Vuex from "../../src/components/Vuex";
import {createStore, createstore} from 'vuex'


const mockPostList = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' }
]

jest.mock('axios', () => ({
    get: jest.fn(() => mockPostList)
}))

describe('Home',()=>{
    it('checks For Todo', function () {

        const wrapper = mount(Home)
        const todo = wrapper.get('[data-test="Container"]')
        expect(todo.text()).toBe('Learn Vue.js 3')

    });
    it('Adds Todo',  async function () {

        const wrapper = mount(Home)
        await wrapper.get('[data-test="new-todo"]').setValue('Hello from jest')
        await wrapper.get('[data-test="form"]').trigger('submit')
expect(wrapper.findAll("[data-test='Container']")).toHaveLength(2)

    });
    it('IsCheked', async function () {
        const wrapper = mount(Home)
        await wrapper.get('[data-test="Check"]').setValue(true)
        expect(wrapper.find('[data-test="Container"]').classes()).toContain('Green')

    });
    it('It Shows h1', function () {
        const wrapper = mount(Home,{
            data(){
                return{
                    Showen:true
                }
            }
        })
        expect(wrapper.find('[data-test="h1"]').text()).toContain('test')

    });
    it('Increment with emit', async function () {

        const wrapper = mount(Counter)
        await wrapper.find('.button').trigger('click')
        const EmmitedEvent = wrapper.emitted('SendC')
        expect(EmmitedEvent).toHaveLength(1)

    });
    it('increase count', async function () {
        const wrapper = mount(Home,{
            data(){
                return{
                    Count: 0
                }
            }
        })
        const wrapper2=mount(Counter)
        await wrapper2.find('.button').trigger('click')
        expect(wrapper2.emitted('SendC'))
        expect(wrapper.find('h2').text()).toEqual('0')


    });
    it('Shows Email',  async function () {
        const wrapper = mount(Form)
      const Input =  wrapper.find('.Input')
        await Input.setValue('Email')
        expect(Input.element.value).toBe('Email')

    });
    it('Checkes the route', async function () {
        const wrapper = mount(HTTP)
        await wrapper.get('button').trigger('click')
        expect(axios.get())
        await flushPromises()
        const posts = wrapper.findAll('[data-test="post"]')

        expect(posts).toHaveLength(2)
        expect(posts[0].text()).toContain('title1')
        expect(posts[1].text()).toContain('title2')
    });
    it('renders a message via vm prop', function () {
        const wrapper = mount(HTTP,{
            data(){
                return{
                    message:'yes'
                }
            },
            props:{
                P:'no'
            }
        })

        expect(wrapper.find('.message').text()).toContain('yes')
        expect(wrapper.getComponent(HTTP).vm.$data.message).toContain('yes')

    });
    it('tests Vuex', async function () {

        const store = createStore({
            state() {
                return {
                    CountVL: 0
                }
            },
            mutations: {
                Increment(state) {
                    state.CountVL += 1
                }
            }
        })
            const wrapper = mount(Vuex, {
                global: {
                    plugins: [store]
                }
            })

            await wrapper.find('.button').trigger('click')

            expect(wrapper.find('p').text()).toContain(' 1')


    });



})
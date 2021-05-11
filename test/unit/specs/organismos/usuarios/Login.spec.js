import { mount } from '@vue/test-utils'
import Login from '@/components/organismos/usuarios/Login.vue'
import router from '@/router'
import Vue from 'vue'
Vue.use(router)
describe('Login do usuario', () => {
  it('Login contenha name', () => {
    const wrapper = mount(Login)
    expect(wrapper.name()).toBe('Login')
  })
})

import Cadastro from '@/components/organismos/usuarios/Cadastro'

import { mount } from '@vue/test-utils'
describe('Cadastro de usuario', () => {
  const wrapper = mount(Cadastro)
  it('Login contenha name', () => {
    expect(wrapper.name()).toBe('CadastroUsuario')
  })
  it('botão emite evento de click', () => {
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})

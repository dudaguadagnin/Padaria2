
import { mount } from '@vue/test-utils'
import ButtonSucess from '@/components/atomos/botoes/ButtonSucess'

describe('Atomo Botão', () => {
  const wrapper = mount(ButtonSucess)
  it('encontrar botão', () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })
  // CreateLocalVue
  // CreateLocalVue, shallowMount, RouterLinkStub
  it('botão emite evento de click', () => {
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})

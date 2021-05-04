import CaixaTexto from '@/components/atomos/inputs/CaixaTexto'
import { mount } from '@vue/test-utils'

describe('Caixa de texto', () => {
  const wrapper = mount(CaixaTexto)
  it('encontrar tag de textarea', () => {
    const textarea = wrapper.find('textarea')
    expect(textarea.exists()).toBe(true)
  })
  it('textarea envia o conteudo', () => {
    wrapper.vm.$emit('submit')
    expect(wrapper.emitted().submit).toBeTruthy()
  })
})

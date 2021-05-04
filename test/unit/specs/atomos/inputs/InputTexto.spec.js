import InputTexto from '@/components/atomos/inputs/InputTexto'
import { mount } from '@vue/test-utils'
describe('Input de texto', () => {
  const wrapper = mount(InputTexto)
  it('input envia o conteudo', () => {
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    wrapper.vm.$emit('submit')
    expect(wrapper.emitted().submit).toBeTruthy()
  })
})

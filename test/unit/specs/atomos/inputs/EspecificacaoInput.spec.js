import EspecificacaoInput from '@/components/atomos/inputs/EspecificacaoInput'
import { mount } from '@vue/test-utils'
describe('Especificacao input', () => {
  const wrapper = mount(EspecificacaoInput)
  it('contenha tag label', () => {
    const label = wrapper.find('label')
    expect(label.exists()).toBe(true)
  })
})


import CardTexto from '@/components/atomos/card/CardTexto'
import { mount } from '@vue/test-utils'

describe('card de texto', () => {
  it('existe tag de texto', () => {
    const wrapper = mount(CardTexto)
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
  })
})

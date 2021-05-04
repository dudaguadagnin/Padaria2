import CardTitulo from '@/components/atomos/card/CardTitulo'
import { mount } from '@vue/test-utils'

describe('Titulo do card', () => {
  it('existe titulo', () => {
    const wrapper = mount(CardTitulo)
    const h5 = wrapper.find('h5')
    expect(h5.exists()).toBe(true)
  })
})

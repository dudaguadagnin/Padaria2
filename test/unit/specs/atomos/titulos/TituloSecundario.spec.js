import TituloSecundario from '@/components/atomos/titulos/TituloSecundario'
import { mount } from '@vue/test-utils'
describe('TituloSecundario', () => {
  const wrapper = mount(TituloSecundario)
  it('contenha tag h5', () => {
    const h3 = wrapper.find('h3')
    expect(h3.exists()).toBe(true)
  })
})

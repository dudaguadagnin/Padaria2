import TituloPrincipal from '@/components/atomos/titulos/TituloPrincipal'
import { mount } from '@vue/test-utils'
describe('TituloPrincipal', () => {
  const wrapper = mount(TituloPrincipal)
  it('contenha classe ofertas-titulo', () => {
    expect(wrapper.classes()).toContain('ofertas-titulo')
  })
  it('contenha tag h5', () => {
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
  })
})

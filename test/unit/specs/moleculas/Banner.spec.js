import Banner from '@/components/moleculas/Banner'
import TituloPrincipal from '@/components/atomos/titulos/TituloPrincipal'
import Subtitulo from '@/components/atomos/titulos/Subtitulo'
import { mount } from '@vue/test-utils'
describe('Banner', () => {
  const wrapper = mount(Banner)
  it('contenha component TituloPrincipal e Subtitulo', () => {
    const principal = wrapper.findComponent(TituloPrincipal)
    const subtitulo = wrapper.findComponent(Subtitulo)
    expect(principal.exists()).toBe(true)
    expect(subtitulo.exists()).toBe(true)
  })
  it('contenha tag img', () => {
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
  })
})

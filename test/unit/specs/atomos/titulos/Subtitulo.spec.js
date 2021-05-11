import Subtitulo from '@/components/atomos/titulos/Subtitulo'
import { mount } from '@vue/test-utils'
describe('Subtitulo', () => {
  const wrapper = mount(Subtitulo)
  it('contenha classe subtitulo', () => {
    expect(wrapper.classes()).toContain('subtitulo')
  })
  it('contenha tag h5', () => {
    const h5 = wrapper.find('h5')
    expect(h5.exists()).toBe(true)
  })
})

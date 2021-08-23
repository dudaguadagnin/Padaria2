import Ofertas from '@/components/moleculas/Ofertas'
import { mount } from '@vue/test-utils'

describe('Ofertas', () => {
  it('Login contenha name', () => {
    const wrapper = mount(Ofertas)
    expect(wrapper.name()).toBe('Ofertas')
  })
  const video = require('./ofertasaxios')
  it('faca acesso a API', () => {
    const getOfertas = video.getOfertas()
    expect(getOfertas).resolves.toBe({})
  })
})

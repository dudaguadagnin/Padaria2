import Ofertas from '@/components/moleculas/Ofertas'
import { mount } from '@vue/test-utils'
describe('Ofertas', () => {
  const wrapper = mount(Ofertas)
  it('Login contenha name', () => {
    expect(wrapper.name()).toBe('Ofertas')
  })
})

import Home from '@/components/organismos/usuarios/Home'
import { mount } from '@vue/test-utils'

describe('Home', () => {
  it('Home contenha name', () => {
    const wrapper = mount(Home)
    expect(wrapper.name()).toBe('Home')
  })
  it('Home contenha name', () => {
    const wrapper = mount(Home)
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
  })
})

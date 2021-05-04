import LiEstiloPadrao from '@/components/atomos/links/LiEstiloPadrao'
import { mount } from '@vue/test-utils'
describe('LiEstiloPadrao', () => {
  const wrapper = mount(LiEstiloPadrao)
  it('contenha class nav-item', () => {
    expect(wrapper.classes()).toContain('nav-item')
  })
  it('contenha class nav-item', () => {
    const li = wrapper.find('li')
    expect(li.exists()).toBe(true)
  })
})

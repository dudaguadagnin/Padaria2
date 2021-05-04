import AncoraLinkPadrao from '@/components/atomos/links/AncoraLinkPadrao'
import { mount } from '@vue/test-utils'
describe('', () => {
  const wrapper = mount(AncoraLinkPadrao)
  it('input recebe id', () => {
    const a = wrapper.find('a')
    expect(a.exists()).toBe(true)
  })
})

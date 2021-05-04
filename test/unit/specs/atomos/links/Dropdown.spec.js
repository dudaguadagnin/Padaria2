import Dropdown from '@/components/atomos/links/Dropdown'
import { mount } from '@vue/test-utils'
describe('', () => {
  it('', () => {
    const wrapper = mount(Dropdown)
    expect(wrapper.classes()).toContain('dropdown-menu')
  })
})

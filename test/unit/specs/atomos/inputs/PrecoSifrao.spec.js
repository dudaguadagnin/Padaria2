import PrecoSifrao from '@/components/atomos/inputs/PrecoSifrao'
import { mount } from '@vue/test-utils'
describe('PrecoSifrao', () => {
  const wrapper = mount(PrecoSifrao)
  it('contenha tag span', () => {
    const span = wrapper.find('span')
    expect(span.exists()).toBe(true)
  })
})

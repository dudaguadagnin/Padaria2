
import GrupoItens from '@/components/atomos/card/GrupoItens'
import { mount } from '@vue/test-utils'

describe('Itens (li)', () => {
  it('existe tag li', () => {
    const wrapper = mount(GrupoItens)
    const li = wrapper.find('li')
    expect(li.exists()).toBe(true)
  })
})

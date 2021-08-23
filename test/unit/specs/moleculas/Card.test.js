import Card from '@/components/moleculas/Card'
import { shallowMount } from '@vue/test-utils'

describe('Card', () => {
  it('contenha todos os component', async () => {
    const wrapper = shallowMount(Card)
    await wrapper.setData({ quantidadeCompra: [''] })
    console.log('quantidade', wrapper.vm.quantidadeCompra)
    expect(wrapper.vm.quantidadeCompra).toEqual([''])
  })
})

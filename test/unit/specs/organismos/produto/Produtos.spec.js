import Produtos from '@/components/organismos/produto/Produtos'
import { shallowMount } from '@vue/test-utils'

describe('Produtos', () => {
  const $route = { path: 'cardapio' }
  const wrapper = shallowMount(Produtos, {
    mocks: {
      $route
    }
  })
  it('Produtos contenha name', () => {
    expect(wrapper.name()).toBe('produtos')
  })
  it('pertença a rota', () => {
    expect(wrapper.vm.$route.path).toBe($route.path)
  })
})

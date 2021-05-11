import { mount, RouterLinkStub } from '@vue/test-utils'
import CadastroProd from 'C:/Users/eduarda.guadagnin/Desktop/Padaria/src/components/organismos/produto/CadatroProd.vue'

describe('Cadastro de Produto', () => {
  const wrapper = mount(CadastroProd, {
    stubs: {
      RouterLink: RouterLinkStub
    }
  })
  it('redirecione para o link correto', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/cadastro-de-produtos')
  })
  it('Login contenha name', () => {
    expect(wrapper.name()).toBe('Produtos')
  })
})

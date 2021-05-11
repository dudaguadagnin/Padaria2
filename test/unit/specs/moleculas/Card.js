import Card from '@/components/moleculas/Card'
import { mount } from '@vue/test-utils'
import ImagemCard from '@/components/atomos/imagens/ImagemCard'
/* import CardTitulo from '@/components/atomos/card/CardTitulo'
import CardTexto from '@/components/atomos/card/CardTexto'
import InputNumerico from '@/components/atomos/inputs/InputNumeric'
import InputTexto from '@/components/atomos/inputs/InputTexto'
import ButtonSucess from '@/components/atomos/botoes/ButtonSucess'
import GrupoItens from '@/components/atomos/card/GrupoItens'
import AncoraLinkPadrao from '@/components/atomos/links/AncoraLinkPadrao' */
describe('Card', () => {
  const wrapper = mount(Card, {
    propsData: {
      comidas: [
        {
          '-MZULCrnbq8nDmLmp2wA': {
            'descricao': 'Farinha de milho',
            'imagem': 'https://static.baratocoletivo.com.br/2017/1013/oferta_15079234256514_9.jpg',
            'nome': 'Bolo de Fubá',
            'preco': '4,00/unidade',
            'precoantigo': '4,00/unidade',
            'quantidade': 0
          }
        }
      ],
      promocao: true
    }
  })
  it('contenha todos os component', () => {
    const imagemCard = wrapper.findComponent(ImagemCard)
    // const cardTitlo = wrapper.findComponent(CardTitulo)
    // const cardTexto = wrapper.findComponent(CardTexto)
    // const inputTexto = wrapper.findComponent(InputTexto)
    // const buttonSucess = wrapper.findComponent(ButtonSucess)
    // const grupoItens = wrapper.findComponent(GrupoItens)

    expect(imagemCard.exists()).toBe(true)
    // expect(cardTitlo.exists()).toBe(true)
    // expect(cardTexto.exists()).toBe(true)
    // expect(buttonSucess.exists()).toBe(true)
    // expect(grupoItens.exists()).toBe(true)
    // expect(inputTexto.exists()).toBe(true)
  })
})

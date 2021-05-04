
import ImagemCard from '@/components/atomos/imagens/ImagemCard'
import { mount } from '@vue/test-utils'

describe('Imagem do card', () => {
  it('existe tag de imagem', () => {
    const wrapper = mount(ImagemCard)
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
  })
})

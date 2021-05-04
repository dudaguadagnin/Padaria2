import InputNumeric from '@/components/atomos/inputs/InputNumeric'
import { mount } from '@vue/test-utils'

describe('Caixa de texto', () => {
  const wrapper = mount(InputNumeric)
  it('encontrar tag de input', () => {
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
  })

  it('input envia o conteudo', () => {
    wrapper.vm.$emit('submit')
    expect(wrapper.emitted().submit).toBeTruthy()
  })
  it('input recebe id', () => {
    const Component = {
      template: '<input :id="id">',
      props: ['id']
    }
    const wrappe = mount(Component, {
      propsData: {
        id: ''
      }
    })
    expect(wrappe.text()).toBe('')
  })
  it('input contem name', () => {
    expect(wrapper.name()).toBe('inputNumeric')
  })
})

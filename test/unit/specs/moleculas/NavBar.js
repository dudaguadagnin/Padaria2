import Navbar from '@/components/moleculas/Navbar'
import { shallowMount } from '@vue/test-utils'
import NavbarLight from '@/components/atomos/NavbarLight'
import Dropdown from '@/components/atomos/links/Dropdown'

describe('Subtitulo', () => {
  const wrapper = shallowMount(Navbar)
  it('contenha tag h5', () => {
    const navbarLight = wrapper.findComponent(NavbarLight)
    const dropdown = wrapper.findComponent(Dropdown)

    const liEstiloPadrao = wrapper.find('liEstiloPadrao')
    expect(liEstiloPadrao.exists()).toBe(true)

    expect(navbarLight.exists()).toBe(true)
    expect(dropdown.exists()).toBe(false)
  })

  it('Login contenha name', () => {
    expect(wrapper.name()).toBe('NavBar')
  })
})

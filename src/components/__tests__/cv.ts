import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CV from '../CV.vue'

describe('cv', () => {
  it('renders properly', () => {
    const wrapper = mount(CV, { props: { msg: 'IRINA FYLYPPOVA' } })
    expect(wrapper.text()).toContain('CV')
  })
})

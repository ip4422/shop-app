import React from 'react'
import { shallow } from 'enzyme'

import { CardAvatar } from '../CardAvatar'
import { findByTestAttr } from '../../../../test'

const defaultProps = {
  imageSrc: '../../../../public/images/alien_tourists.jpg',
  name: 'alien-tourists',
}

/**
 * Factory function to create a ShallowWrapper component for the Input component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<CardAvatar {...setupProps} />)
  return wrapper
}

describe('Shallow rendering CardAvatar', () => {
  test('should render with default props', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'card-avatar')
    expect(component.length).toBe(1)
    expect(component.prop('src')).toEqual(defaultProps.imageSrc)
    expect(component.prop('alt')).toEqual(defaultProps.name)
  })

  test('should render with default props', () => {
    const wrapper = setup({ imageSrc: '', name: '' })
    const component = findByTestAttr(wrapper, 'card-avatar')
    expect(component.length).toBe(1)
    expect(component.prop('src')).toEqual('')
    expect(component.prop('alt')).toEqual('')
  })
})

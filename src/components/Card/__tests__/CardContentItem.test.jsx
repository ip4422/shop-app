import React from 'react'
import { shallow } from 'enzyme'

import { CardContentItem } from '../CardContentItem'
import { findByTestAttr } from '../../../../test'

const defaultProps = {
  caption: 'default caption',
  value: 'default value',
}

/**
 * Factory function to create a ShallowWrapper component for the Input component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<CardContentItem {...setupProps} />)
  return wrapper
}

describe('render without errors', () => {
  test('should render with default props', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'card-content-item')
    expect(component.length).toBe(1)
  })

  test('should render with empty props', () => {
    const wrapper = setup({ caption: '', value: '' })
    const component = findByTestAttr(wrapper, 'card-content-item')
    expect(component.length).toBe(1)
  })
})

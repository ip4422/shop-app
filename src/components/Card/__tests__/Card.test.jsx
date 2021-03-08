import React from 'react'
import { shallow, mount } from 'enzyme'

import { Card } from '../Card'
import { findByTestAttr } from '../../../../test'

const onChangeMock = jest.fn()

const defaultProps = {
  item: {
    id: '1',
    name: 'Trejo Priest',
    color: 'black',
    issueDate: '23.03.2020',
    price: '4.99',
    rating: '4.00',
    inStock: 'false',
    image: './images/trejo_priest.jpg',
    isFiltered: 'false',
  },
  onChange: onChangeMock,
}
/**
 * Factory function to create a ShallowWrapper component for the Input component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<Card {...setupProps} />)
  return wrapper
}

describe('Render Card component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup()
  })

  test('should render Card without errors with default props', () => {
    const component = findByTestAttr(wrapper, 'card-component')
    expect(component.length).toBe(1)
  })

  test('should render image inside Card component', () => {
    const component = wrapper.find('CardAvatar')
    expect(component.length).toBe(1)
    expect(component.prop('imageSrc')).toBe(defaultProps.item.image)
    expect(component.prop('name')).toBe(defaultProps.item.name)
  })

  test('should render Price inside Card component', () => {
    const component = wrapper.find('[caption="Price"]')
    expect(component.length).toBe(1)
    expect(component.prop('value')).toBe(defaultProps.item.price)
  })

  test('should render Color inside Card component', () => {
    const component = wrapper.find('[caption="Color"]')
    expect(component.length).toBe(1)
    expect(component.prop('value')).toBe(defaultProps.item.color)
  })

  test('should render In Stock Only inside Card component', () => {
    const component = wrapper.find('[caption="In Stock Only"]')
    expect(component.length).toBe(1)
    expect(component.prop('value')).toBe(defaultProps.item.inStock)
  })

  test('should render Button "Order" inside Card component', () => {
    const component = wrapper.find('[caption="In Stock Only"]')
    expect(component.length).toBe(1)
    expect(component.prop('value')).toBe(defaultProps.item.inStock)
  })
})

describe('Should react to changes events for inStock component', () => {
  test('should call inStock change with mount component', () => {
    const event = { target: { checked: true } }
    const wrapper = mount(<Card {...defaultProps} />)
    const component = wrapper.find('[caption="In Stock Only"]')
    component.find('input').simulate('change', event)
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
  })

  test('should call inStock change with shallow render component', () => {
    const event = { target: { checked: true } }
    const wrapper = setup()
    const component = wrapper.find('[caption="In Stock Only"]')
    component.simulate('change', event)
    expect(onChangeMock.mock.calls[0][0]).toBe(event)
  })
})

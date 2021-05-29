import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'

import { CardContainerUnconnected, CardContainer } from '../CardContainer'
import { findByTestAttr, storeFactory } from '../../../../test'
import InitialStore from '../../../reducers/initialStore.json'

const { admin, user, errorMsg, colors, items, filter, cart } = InitialStore

const initialStore = {
  sessionStore: {
    user,
    admin,
    errorMsg,
  },
  productStore: {
    colors,
    items,
    filter,
    cart,
  },
}

const setInStockMock = jest.fn()

const defaultProps = {
  setInStock: setInStockMock,
  item: items[0],
}

/**
 * Factory function to create a ShallowWrapper component for the Input component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setupShallow = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<CardContainerUnconnected {...setupProps} />)
  // console.log('ShallowWrapper: ', wrapper.debug())
  return wrapper
}

/**
 * Factory function to create a ReactWrapper component for the Input component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ReactWrapper}
 */
const setupMount = (props = {}) => {
  const store = storeFactory(initialStore)
  const setupProps = { ...defaultProps, ...props }
  const wrapper = mount(
    <Provider store={store}>
      <CardContainer {...setupProps} />
    </Provider>
  )
  // console.log('ReactWrapper: ', wrapper.debug())
  return wrapper
}

describe('Render unconnected Card container', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setupShallow()
  })
  test('should render with default props without error', () => {
    const component = findByTestAttr(wrapper, 'card-container')
    expect(component.length).toBe(1)
    expect(wrapper.instance().props.item).toEqual(defaultProps.item)
  })

  test('should call onChange handler', () => {
    const component = findByTestAttr(wrapper, 'card-container')
    component.simulate('change', {})
    expect(setInStockMock).toHaveBeenCalled()
  })
})

describe('Render connected Card container', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setupMount()
  })

  test('should render with default props without errors', () => {
    const component = wrapper.find('CardContainerUnconnected')
    expect(component.length).toBe(1)
  })
})

import React, { useState } from 'react'

import { DatePicker, CheckBox, Amount, DropDown } from '..'
import { IFiltersProps } from '../types'
import { TFilter } from '../../reducers/types'

export const Filters = ({
  onChange,
  filter = {} as TFilter,
  colors = [],
}: IFiltersProps): JSX.Element => {
  const [focusedFromDate, setFocusedFromDate] = useState(false)
  const [focusedToDate, setFocusedToDate] = useState(false)

  const handleFocusFromDate = ({ focused }: { focused: boolean }) => {
    setFocusedFromDate(focused)
  }

  const handleFocusToDate = ({ focused }: { focused: boolean }) => {
    setFocusedToDate(focused)
  }

  return (
    <div className='container'>
      <div className='pt-3 pb-3 mb-3'>
        <div className='container'>
          <div className='row mb-3'>
            <DatePicker
              caption={'From:'}
              date={filter.fromDate}
              onDateChange={onChange('fromDate')}
              focused={focusedFromDate}
              onFocusChange={handleFocusFromDate}
              id={'from-date-id'}
            />
            <DatePicker
              caption={'To:'}
              date={filter.toDate}
              onDateChange={onChange('toDate')}
              focused={focusedToDate}
              onFocusChange={handleFocusToDate}
              id={'to-date-id'}
            />
            <div className='col-4'>
              <CheckBox
                caption={'In Stock only'}
                onChange={onChange('inStockOnly')}
                value={filter.inStockOnly}
                isLarge
              />
            </div>
          </div>
          <div className='row'>
            <Amount caption={'Price from'} onChange={onChange('priceFrom')} />
            <Amount caption={'Price to'} onChange={onChange('priceTo')} />
            <DropDown
              id='color-picker'
              caption={'Color'}
              items={colors}
              onChange={onChange('color')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

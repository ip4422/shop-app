import React, { SyntheticEvent } from 'react'
// import PropTypes from 'prop-types'

interface IPasswordFieldProps {
  caption: string;
  name: string
  onChange: (event: SyntheticEvent) => void
  value: string
}

export const PasswordField = (props: IPasswordFieldProps): JSX.Element => {
  const { onChange, caption, name, value } = props
  return (
    <div className='form-group'>
      <label htmlFor='InputPassword'>{caption}</label>
      <input
        type='password'
        data-field-name='password'
        onChange={onChange}
        className='form-control'
        name={name}
        placeholder='Password'
        value={value}
      />
    </div>
  )
}

export default PasswordField

// export class PasswordField extends Component {
//   render() {
//     const { onChange, caption, name, value } = this.props
//     return (
//       <div className='form-group'>
//         <label htmlFor='InputPassword'>{caption}</label>
//         <input
//           type='password'
//           data-field-name='password'
//           onChange={onChange}
//           className='form-control'
//           name={name}
//           placeholder='Password'
//           value={value}
//         />
//       </div>
//     )
//   }
// }

// PasswordField.propTypes = {
//   caption: PropTypes.string,
//   name: PropTypes.string,
//   onChange: PropTypes.func,
//   value: PropTypes.string,
// }

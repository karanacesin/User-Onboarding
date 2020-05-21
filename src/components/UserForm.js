import React from 'react'

 function UserForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
  } = props

  return (
    <form onSubmit={onSubmit}>
      <div >
        <h2>Add a User</h2>
      </div>

      <div >
        <label>Name:&nbsp;
          <input
            type='text'
            placeholder='Your Name'
            maxLength='50'
            name='name'
            value={values.name}
            onChange={onInputChange}
          />
        </label>

        <label>Email:&nbsp;
          <input
            type='email'
            placeholder='Your email'
            maxLength='50'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        <label>Password:&nbsp;
          <input 
          type='password'
          placeholder='Enter password'
          name='password' 
          value={values.password} 
          onChange={onInputChange}
          > 
          </input>
        </label>

        <label>Terms of Service:
            <input
            type='checkbox'
            name='terms'
            checked={values.terms}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <button disabled={disabled}>submit</button>

        <div >
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
        </div>
        
      </div>
    </form>
  )
}


export default UserForm
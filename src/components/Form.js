import React from 'react'

const Form = () => {
  return (
    <div>
      <div className='form-container'>
        <form>
          <label>
            Hospital
            <input type='text' name='email' id='email' />
          </label>
          <label>
            Doctor
            <input type='text' name='email' id='email' />
          </label>
          <label>
            Start Date
            <input type='date' name='email' id='email' />
          </label>
          <label>
            End Date
            <input type='date' name='email' id='email' />
          </label>
          <label>
            Days
            <input type='number' name='email' id='email' />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Form

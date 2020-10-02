import React from 'react';

import {createCopReact} from '../services/cop.service'

function CreateCop () {

  const [values, setValues] = React.useState({
    name: ``,
    password: ``,
    email: ``
  });

  const handleChange = (type) => (e) => {
    setValues({...values, [type]: e.target.value})
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    await createCopReact(values);
  }

  return (
    <form>
      <input
        type='text'
        placeholder="name"
        onChange={handleChange('name')}
      />
      <br/>
      <input
        type='text'
        placeholder="password"
        onChange={handleChange('password')}
      />
      <br/>
      <input
        type='text'
        placeholder="your email"
        onChange={handleChange('email')}
      />
      <br/>
      <input type='submit' onClick={formSubmit}/>
    </form>
  )
}

export default CreateCop;
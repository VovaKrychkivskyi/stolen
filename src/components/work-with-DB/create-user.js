import React from 'react';

import {createUserReact} from '../services/user.service'

function CreateUser () {

  const [values, setValues] = React.useState({
    bike_name: ``,
    owner_bike: ``,
    owner_email: ``
  });

  const handleChange = (type) => (e) => {
    setValues({...values, [type]: e.target.value})
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    let newBike = await createUserReact(values);
  }

  return (
    <form>
      <input
        type='text'
        placeholder="bike name"
        onChange={handleChange('bike_name')}
      />
      <br/>
      <input
        type='text'
        placeholder="your name"
        onChange={handleChange('owner_bike')}
      />
      <br/>
      <input
        type='text'
        placeholder="your email"
        onChange={handleChange('owner_email')}
      />
      <br/>
      <input type='submit' onClick={formSubmit}/>
    </form>
  )
}

export default CreateUser;
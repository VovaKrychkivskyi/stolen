import React from 'react';

import {getCopReact} from '../services/get-cops.service'

async function AllCops() {

  let newCops = await getCopReact();

  return (
    newCops
  )
}

export default AllCops;
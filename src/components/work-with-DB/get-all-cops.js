import {getCopReact} from '../services/get-cops.service'

async function AllCops() {
  console.log(55);
  let newCops = await getCopReact();

  return (
    console.log(22)
  )
}

export default AllCops;
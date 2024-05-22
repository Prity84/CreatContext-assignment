import React, { useContext } from 'react'
import { myContext } from '../App'

//Glitch in production
const UserDetails = () => {
    const data = useContext(myContext);
  return (
    <div>
      <h1>My name is : {data.name}</h1>
      <h1>My lastname is : {data.lastname}</h1>
      <h1>My color is : {data.color}</h1>


    </div>
  )
}

export default UserDetails

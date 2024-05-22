import React, { useContext } from 'react'
import { myContext } from '../App'

const Bottom = () => {
    const data = useContext(myContext)
  return (
    <div>
      <h1 style={{backgroundColor:data.color}}>I am Button</h1>
    </div>
  )
}

export default Bottom

import React from 'react'
import { useParams } from 'react-router-dom'

const Productid = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>Productid</div>
  )
}

export default Productid
import React from 'react'
import { useParams } from 'react-router-dom'

function Loan() {
  const { id } = useParams()
  return (
    <>
      <h1>Loan {id}</h1>
    </>
  )
}

export default Loan

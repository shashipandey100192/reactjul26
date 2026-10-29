import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div>Errorpage
        <Link to="/" className='btn btn-danger btn-sm'>back to home</Link>

    </div>
  )
}

export default Errorpage
import React from 'react'
import { Link } from 'react-router-dom'

function signIn() {
  return (
    <>
      <h1> Sign In / Sign Up </h1>
      <Link to="/main">
        <button className="signButton">Sign In</button>
      </Link>
    </>
  )
}

export default signIn

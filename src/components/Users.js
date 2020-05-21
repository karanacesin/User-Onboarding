import React from 'react'

 function Users(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching user details...</h3>
  }

  return (
    <div >
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.password}</p>
      <p>Teams of Service: {details.terms}</p>
    </div>
  )
}


export default Users
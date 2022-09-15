import React from 'react'
import { useUser } from '@auth0/nextjs-auth0';

const Profile = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
  
  return (
    <div> { user ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <h1><a href="/api/auth/logout">Logout</a></h1>
        </div>):
        <h1><a href="/api/auth/login">Login</a></h1>
      }</div>
  )
}

export default Profile
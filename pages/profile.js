import React from 'react'
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

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
          <Link href="/api/auth/logout">Logout</Link>
        </div>):
        <Link href="/api/auth/login">Login</Link>
      }</div>
  )
}

export default Profile
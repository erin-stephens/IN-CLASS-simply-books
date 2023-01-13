import React from 'react';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  //console.warn(user);
  return (
    <div>
      <Image src={user.photoURL} alt="userURl" width="100px" height="100px" />
      <h1>{user.displayName}</h1>
      <h2>{user.email}</h2>
      <h4>{user.metadata.lastSignInTime}</h4>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
      Sign Out
      </Button>
    </div>
  );
}

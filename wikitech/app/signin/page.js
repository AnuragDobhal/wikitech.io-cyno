"use client"
import { useState } from 'react';
// import { useRouter } from 'next/router';
import firebase from '../../lib/firebase'

const SignIn = () => {
  // const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPassword = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/dashboard'); 
        } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button onClick={signInWithEmailAndPassword}>Sign In</button>
    </div>
  );
};

export default SignIn;

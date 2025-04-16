import { auth } from './firebase';
import {  onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'; 

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};

export const loginWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password); 
};

export const logout = () => {
  return signOut(auth);
};

export const getUserTokenClaims = async () => {
  const user = await getCurrentUser();
  if (!user) return null;

  const tokenResult = await user.getIdTokenResult();
  return tokenResult.claims;
};

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { auth } from "./firebase.config";

// SIGN UP
export const signUpUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

// LOGIN
export const signInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

// LOGOUT
export const signOutUser = async () => {
    return await signOut(auth);
};
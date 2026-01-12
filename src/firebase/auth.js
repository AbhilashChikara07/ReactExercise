import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth } from "./firebase.config";

// SIGN UP
export const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// LOGIN
export const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// GOOGLE LOGIN
export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

// LOGOUT
export const signOutUser = () => {
    return signOut(auth);
};
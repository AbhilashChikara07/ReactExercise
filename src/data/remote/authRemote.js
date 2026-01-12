import {
    signInUser,
    signUpUser,
    signInWithGoogle,
} from "../../firebase/auth.js";

export const AuthRemote = {
    login: async (email, password) => {
        return await signInUser(email, password);
    },

    signup: async (email, password) => {
        return await signUpUser(email, password);
    },

    googleLogin: async () => {
        return await signInWithGoogle();
    },
};
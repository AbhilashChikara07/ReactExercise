import { AuthRemote } from "../remote/authRemote";
import { Storage } from "../local/storage";
import { StorageKeys } from "../local";

export const AuthRepository = {
    login: async (email, password) => {
        const result = await AuthRemote.login(email, password);
        const user = result.user;

        const authUser = {
            uid: user.uid,
            email: user.email,
            provider: user.providerData[0]?.providerId || "password",
            emailVerified: user.emailVerified,
        };

        Storage.save(StorageKeys.AUTH_USER, authUser);
        return authUser;
    },

    signup: async (email, password) => {
        const result = await AuthRemote.signup(email, password);
        const user = result.user;

        const authUser = {
            uid: user.uid,
            email: user.email,
            provider: "password",
            emailVerified: user.emailVerified,
        };

        Storage.save(StorageKeys.AUTH_USER, authUser);
        return authUser;
    },

    googleLogin: async () => {
        const result = await AuthRemote.googleLogin();
        const user = result.user;

        const authUser = {
            uid: user.uid,
            email: user.email,
            provider: user.providerData[0]?.providerId, // google.com
            photoURL: user.photoURL,
        };

        Storage.save(StorageKeys.AUTH_USER, authUser);
        return authUser;
    },

    logout: () => {
        Storage.remove(StorageKeys.AUTH_USER);
    },

    getLoggedInUser: () => {
        return Storage.get(StorageKeys.AUTH_USER);
    },
};
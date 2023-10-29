import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create a password-based account
    const signUpWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in a user with an email address and password
    const signInWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Update a user's profile
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName: displayName, photoURL: photoURL });
    };

    // Authenticate Using Google with
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    };

    // Authenticate Using GitHub
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });

        return () => unSubscribe
    }, []);

    const authentication = { signUpWithEmailPass, user, loading, signInWithEmailPass, updateUserProfile, signInWithGoogle, signInWithGithub }

    return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
};

export default AuthProvider;
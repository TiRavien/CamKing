import { useEffect, useState } from "react";
import initFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

initFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const brandNewUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email,name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const place = location?.state?.from || '/';
                history.replace(place);
                setError('');
            })
            .catch((error) => {
                // setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const observer = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => observer;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, name) => {

    }

    return {
        user,
        loginUser,
        brandNewUser,
        logOut,
        isLoading,
        error,

    }

}

export default useFirebase;
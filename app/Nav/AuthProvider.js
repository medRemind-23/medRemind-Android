import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const firebaseConfig = {
    apiKey: "AIzaSyDxH3SswlCvwgjaAHGaVLT7jEn6PZ6HCrQ",
    authDomain: "medremind-23.firebaseapp.com",
    projectId: "medremind-23",
    storageBucket: "medremind-23.appspot.com",
    messagingSenderId: "125022898851",
    appId: "1:125022898851:web:30c07ef6d0f14ec12ecd16",
    measurementId: "G-Z3C8F2S554",
  };

  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const login = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        AsyncStorage.setItem("userToken", user.stsTokenManager.accessToken);
        console.log(navigation);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
        setLoading(false);
      });
  };

  const logout = () => {
    //logout
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    // console.log(userToken)
  };

  const isLoggedin = async () => {
    try {
      await AsyncStorage.getItem("userToken");
    } catch (e) {
      console.log(`isLogged Error ${e}`);
    }
  };

  const getUserData = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    // console.log(userToken)
    if (userToken) {
      var userData = jwt_decode(userToken);
      return userData;
    } else {
      return null;
    }
  };

  useEffect(() => {
    isLoggedin();
  });
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userToken,
        error,
        loading,
        fireBaseApp,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

import React, { useContext, useEffect, useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Button, TextInput, Text, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Context from '../../context/Context';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB93Af0LcTJMnpJn1XP1FuLjhB18LVmmIs",
    authDomain: "todolist-up.firebaseapp.com",
    projectId: "todolist-up",
    storageBucket: "todolist-up.appspot.com",
    messagingSenderId: "1064894965008",
    appId: "1:1064894965008:web:8715eaebe3d7fce7173195",
    measurementId: "G-KZNHZ3Y4JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const registrar = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

const login = (email, password, setIsAutenticado) => {

    // //const {logged} = useContext(Context)
    // const { isLoggedIn } = useContext(Context)
    // console.log(autenticado, "-------dfsfsdfsfd")
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            setIsAutenticado(true)
            // Signed in 
            const user = userCredential.user;
            // logged(true)

            // console.log(autenticado)
            // contexto.setLoggedIn(true)
            // contexto.setUser(user)
            // ...
            console.log(user)
        }).catch((error) => {
            console.log(error, "errorFirebase")
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app)


export default function Login() {
    const { logged } = useContext(Context)
    const [autenticado, setIsAutenticado] = useState(false)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    console.log(autenticado)
    useEffect(() => {
        logged(autenticado)
    }, [autenticado])

    return (
        <>
            <View>
                <Text >Usuario</Text>
                <TextInput value={email} onChangeText={setEmail} />

                <Text>Clave</Text>
                <TextInput value={password} onChangeText={setPassword} />

                <Button title="Registrar" onPress={() => registrar(email, password)}></Button>
                <Button title="Iniciar Sesion" onPress={() => login(email, password, setIsAutenticado)}></Button>
            </View>
        </>
    )
}
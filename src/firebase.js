
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyBvYdUi3Ydfl1_HCDNjiOQdjqtyrFIcM2U",
        authDomain: "el-conjunto.firebaseapp.com",
        databaseURL: "https://el-conjunto.firebaseio.com",
        projectId: "el-conjunto",
        storageBucket: "el-conjunto.appspot.com",
        messagingSenderId: "506296486519",
        appId: "1:506296486519:web:4a7e691e275ee14047d472",
        measurementId: "G-0JT0Z4J3TT"
    })
    .database()

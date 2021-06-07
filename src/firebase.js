
import firebase from 'firebase/app'
import 'firebase/database'

export const firebaseApp = firebase
    .initializeApp({
        apiKey: "AIzaSyCteJuI23yrCVmd1lGqtXQ34Z4Lcr-uGaQ",
        authDomain: "el-conjunto-a1c91.firebaseapp.com",
        databaseURL: "https://el-conjunto-a1c91.firebaseio.com",
        projectId: "el-conjunto-a1c91",
        storageBucket: "el-conjunto-a1c91.appspot.com",
        messagingSenderId: "629913695521",
        appId: "1:629913695521:web:b3cd90731af3d2e7c57a60",
        measurementId: "G-BFQ12834K0"
    });

export const db = firebase.database();
export const cloudStorage = firebase.storage();

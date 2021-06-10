
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

export const firebaseApp = firebase
    .initializeApp({
        apiKey: "AIzaSyCkh0tqLFK9LVQKG8yIukuPASPkY8DnCnE",
		authDomain: "el-conjunto-93a89.firebaseapp.com",
		databaseURL: "https://el-conjunto-93a89-default-rtdb.firebaseio.com",
		projectId: "el-conjunto-93a89",
		storageBucket: "el-conjunto-93a89.appspot.com",
		messagingSenderId: "306465039355",
		appId: "1:306465039355:web:d787f834c44f30d489a15e",
		measurementId: "G-GHLFFLFL0J"
    });

export const db = firebase.database();
export const cloudStorage = firebase.storage();

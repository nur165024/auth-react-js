import firebase from "firebase/app";
import "firebase/auth";
require('dotenv').config()

const app = firebase.initializeApp ({
    apiKey: "AIzaSyAFdCDZVFWxfb4aHVqrmkbL-jUT170SAxY",
    authDomain: "user-auth-2021.firebaseapp.com",
    projectId: "user-auth-2021",
    storageBucket: "user-auth-2021.appspot.com",
    messagingSenderId: "342010883301",
    appId: "1:342010883301:web:bfca408e703c2bed46b80c"
});

export const auth = app.auth();

export default app;
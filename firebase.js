const firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyDG_-iXxQpVwYlaXDGhDxKxUAG4RyDOjPg",
    authDomain: "greetify-52576.firebaseapp.com",
    databaseURL: "https://greetify-52576.firebaseio.com",
    projectId: "greetify-52576",
    storageBucket: "greetify-52576.appspot.com",
    messagingSenderId: "340375775378"
});

let firebase_ref = firebase.database().ref();

function test() {
    firebase_ref.push({"id": 10});

    return true;
}

console.log(test());
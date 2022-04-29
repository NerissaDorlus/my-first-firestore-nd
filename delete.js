//Created resaurant uHxEjeWnqE5FUu25HJPt
//Created restaurant FIh4PwjtRiJVhNlSF4rA

import admin from "firebase-admin"; // E6 imports firebase lib of tools

import serviceAccount from "./credentials.js"; //E6 importing credentials to connect to firebase

//const admin = require("firebase-admin");//ES5

//const serviceAccount = require("./credentials.json");// ES5

admin.initializeApp({
  //connects to our  firebase project
  credential: admin.credential.cert(serviceAccount), //creating a certificate from credentials
});

// we are now connected to our firebase project & related sevices

const db = admin.firestore(); //shortcut to access firestore db

const restaurantsCol = db.collection("restaurants"); // shortcut  to point to collections

restaurantsCol
  .doc("uHxEjeWnqE5FUu25HJPt")
  .delete()
  .then((res) => console.log("Success deleting uHxEjeWnqE5FUu25HJPt"))
  .catch((err) => console.error("Error deleting: uHxEjeWnqE5FUu25HJPt", err));

restaurantsCol
  .doc("FIh4PwjtRiJVhNlSF4rA")
  .delete()
  .then((res) => console.log("Success deleting FIh4PwjtRiJVhNlSF4rA "))
  .catch((err) => console.error("Error deleting: FIh4PwjtRiJVhNlSF4rA", err));

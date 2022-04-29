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

// restaurantsCol
//   .get() // getting all rrestaurants
//   .then((snapshot) => {
//     //loop through all results
//     snapshot.docs.forEach((doc) => console.log(doc.data()));
//   })
//   .catch((err) => console.error(err));
//   .catch(handleError);
//   .catch(console.error); // same as above examples

//this returns a specific restaurant
restaurantsCol
  //.where("name", "==", "Bolay")

  // .where("deleted", "!=", true)
  .where("rating", ">=", 4.75)
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => console.log(doc.data()));
  })
  .catch(console.error);

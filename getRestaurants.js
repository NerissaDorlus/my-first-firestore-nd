import { restaurantsCol } from "./connectDb.js";
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

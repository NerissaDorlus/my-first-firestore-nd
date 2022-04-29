import { restaurantsCol } from "./connectDb.js";

// creating an object
const restaurant = {
  name: "Mister 01",
  address: "555 N Federal Hwy Suite #5, Boca Raton, FL 33432",
  cuisine: "Pizza",
  rating: 4.9,
  phone: "(786)677-2903",
};

//add the restaurant object in the firebase
// db.collection('restaurants').add(restaurant)   // db = adm.firestore => go to firestore admin and create a collection named ''
// .then( doc => console.log('Created restaurant', doc.id))
// .catch(err => console.error(err))

//2nd .then method
restaurantsCol
  .add(restaurant) // add restaurant to the restaurants collection
  .then((doc) => console.log("Created resaurant", doc.id)) // handle resolve
  .catch((err) => console.error(err)); // handle rejects

const restaurant2 = {
  name: "Bolay",
  address: "7060 W Palmetto Park Rd, Boca Raton, FL 33433",
  cuisine: "American",
  rating: 4.6,
};

async function addRestaurant(data) {
  try {
    const doc = await db.collection("restaurants").add(data); // add restaurant to collection
    console.log("Created restaurant", doc.id); // handle resolve
  } catch (err) {
    console.error(err); // handle reject
  }
}
addRestaurant(restaurant2);

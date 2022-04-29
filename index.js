const admin = require("firebase-admin");

const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// const restaurantsCol = db.collection('restaurants');

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
  .add(restaurant)
  .then((doc) => console.log("Created resaurant", doc.id))
  .catch((err) => console.error(err));

const restaurant2 = {
  name: "Bolay",
  address: "7060 W Palmetto Park Rd, Boca Raton, FL 33433",
  cuisine: "American",
  rating: 4.6,
};

async function addRestaurant(data) {
  try {
    const doc = await db.collection("restaurants").add(data);
    console.log("Created restaurant", doc.id);
  } catch (err) {
    console.error(err);
  }
}
addRestaurant(restaurant2);

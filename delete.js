import { restaurantsCol } from "./connectDb.js";

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

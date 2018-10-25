import axios from "axios";

export default {
  // Gets all pins
  getPins: function() {
    return axios.get("/api/pins/");
  },
  // Gets the pin with the given category
  getPinCat: function(category) {
    return axios.get("/api/pins/category/" + category);
  },
  // Deletes the pin with the given id
  deletePins: function(id) {
    return axios.delete("/api/pins/" + id);
  },
  // Saves a book to the database
  savePins: function(pinsData) {
    return axios.post("/api/pins", pinsData);
  }
};

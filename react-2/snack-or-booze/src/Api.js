import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  This API class provides methods to interact with those endpoints.
*/

class SnackOrBoozeApi {
  // Fetch all snacks
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  // Fetch all drinks
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // Fetch details of a specific snack by ID
  static async getSnackById(id) {
    const result = await axios.get(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }

  // Fetch details of a specific drink by ID
  static async getDrinkById(id) {
    const result = await axios.get(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }

  // Add a new snack
  static async addSnack(snack) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, snack);
    return result.data;
  }

  // Add a new drink
  static async addDrink(drink) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, drink);
    return result.data;
  }

  // Delete a snack by ID
  static async deleteSnack(id) {
    const result = await axios.delete(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }

  // Delete a drink by ID
  static async deleteDrink(id) {
    const result = await axios.delete(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }
}

export default SnackOrBoozeApi;

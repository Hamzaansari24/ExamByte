// Import the Axios library for making HTTP requests
import axios from 'axios';

// Define the base URL for the API that handles test data
const API_URL = 'http://localhost:8080/api/tests';

// Asynchronous function to fetch all tests from the API
export const getTests = async () => {
  // Send a GET request to the API to fetch the list of tests
  const response = await axios.get(API_URL);
  
  // Return the list of tests from the response object
  return response.data;
};

// Asynchronous function to fetch a specific test by its ID
export const getTestById = async (id) => {
  // Send a GET request to the API to fetch the test by its ID
  const response = await axios.get(`${API_URL}/${id}`);
  
  // Return the specific test data from the response object
  return response.data;
};

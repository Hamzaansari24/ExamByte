// Import the Axios library for making HTTP requests
import axios from 'axios';

// Define the base URL for the API that handles user data
const API_URL = 'http://localhost:8080/api/users';

// Asynchronous function to fetch a user by their GitHub ID
export const getUser = async (githubId) => {
  // Send a GET request to the API to fetch the user with the provided GitHub ID
  const response = await axios.get(`${API_URL}/${githubId}`);

  // Return the user data from the response object
  return response.data;
};

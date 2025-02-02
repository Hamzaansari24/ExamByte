import React from 'react'; // Import React to create the component
import { OAuth2Login } from 'react-oauth/github'; // Import the GitHub OAuth2 login component
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { getUser } from '../services/AuthService'; // Import the function to fetch user data

const AuthPage = () => {
  // Initialize the navigate function for programmatic navigation
  const navigate = useNavigate();

  // Handle successful authentication and user login
  const handleSuccess = async (response) => {
    const githubId = response.profile.id; // Get the GitHub user ID from the response
    const user = await getUser(githubId); // Fetch user data using the GitHub ID
    localStorage.setItem('user', JSON.stringify(user)); // Store the user data in local storage
    navigate('/'); // Redirect to the homepage after successful login
  };

  // Handle authentication failure
  const handleFailure = (error) => {
    console.error('Authentication failed:', error); // Log the error if authentication fails
  };

  return (
    <div>
      <h1>Login with GitHub</h1> {/* Title for the login page */}
      {/* OAuth2Login component to enable GitHub OAuth authentication */}
      <OAuth2Login
        clientId="your-client-id" // GitHub OAuth client ID (replace with actual client ID)
        redirectUri="http://localhost:3000" // Redirect URL after GitHub authentication
        authorizationUrl="https://github.com/login/oauth/authorize" // GitHub OAuth authorization URL
        onSuccess={handleSuccess} // Callback function to call on successful login
        onFailure={handleFailure} // Callback function to call on failed login
      />
    </div>
  );
};

export default AuthPage; // Export the AuthPage component for use in other parts of the app

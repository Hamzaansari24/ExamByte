import React, { useState, useEffect } from 'react'; // Import React and hooks (useState, useEffect)
import { getTests } from '../services/TestService'; // Import the function to fetch all tests

const ResultDisplay = () => {
  // State to store the list of tests
  const [tests, setTests] = useState([]);

  // useEffect hook to fetch the tests when the component mounts
  useEffect(() => {
    const fetchTests = async () => {
      // Fetch the list of tests from the API
      const tests = await getTests();
      // Update the state with the fetched list of tests
      setTests(tests);
    };
    fetchTests(); // Call the function to fetch tests
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <h2>Your Test Results</h2>  {/* Title for the results display */}
      <ul>
        {tests.map((test) => (  // Map through the list of tests and render each one
          <li key={test.id}>  {/* Unique key for each list item */}
            {test.title} - Result: {test.status}  {/* Display the test title with the status */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;  // Export the component for use in other parts of the app

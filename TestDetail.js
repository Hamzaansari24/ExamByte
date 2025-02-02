import React, { useState, useEffect } from 'react'; // Import React and hooks (useState, useEffect)
import { useParams } from 'react-router-dom'; // Import useParams for accessing URL parameters
import { getTestById } from '../services/TestService'; // Import the function to fetch test data by ID

const TestDetail = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();
  
  // State to store the test data
  const [test, setTest] = useState(null);

  // useEffect hook to fetch the test data when the component mounts or when 'id' changes
  useEffect(() => {
    const fetchTest = async () => {
      // Fetch test data using the 'id' from the URL
      const testData = await getTestById(id);
      // Update the state with the fetched test data
      setTest(testData);
    };
    fetchTest(); // Call the function to fetch the test
  }, [id]); // Re-run the effect whenever 'id' changes

  return (
    <div>
      {test ? (  // If 'test' data is available, display it
        <>
          <h2>{test.title}</h2>  {/* Display the test title */}
          <div dangerouslySetInnerHTML={{ __html: test.questions }}></div>  {/* Display the test questions as HTML */}
        </>
      ) : (  // If 'test' data is still loading, show a loading message
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TestDetail;  // Export the component for use in other parts of the app

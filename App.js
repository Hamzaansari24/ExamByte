import React from 'react'; // Import React library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components for routing
import AuthPage from './components/AuthPage'; // Import AuthPage component for user authentication
import TestList from './components/TestList'; // Import TestList component to display all tests
import TestDetail from './components/TestDetail'; // Import TestDetail component to display details of a specific test
import GraderDashboard from './components/GraderDashboard'; // Import GraderDashboard component for grading tasks
import ResultDisplay from './components/ResultDisplay'; // Import ResultDisplay component to show test results

const App = () => {
  return (
    <Router>  {/* Wrap the application with Router to enable routing functionality */}
      <Routes>  {/* Define all the routes for the app */}
        <Route path="/" element={<TestList />} />  {/* Route for the homepage to display all tests */}
        <Route path="/auth" element={<AuthPage />} />  {/* Route for the authentication page */}
        <Route path="/test/:id" element={<TestDetail />} />  {/* Route for displaying a specific test using its ID */}
        <Route path="/grader" element={<GraderDashboard />} />  {/* Route for the grader dashboard */}
        <Route path="/results" element={<ResultDisplay />} />  {/* Route for displaying the results of tests */}
      </Routes>
    </Router>  {/* End of Router wrapping */}
  );
};

export default App;  // Export the App component for use in other parts of the application

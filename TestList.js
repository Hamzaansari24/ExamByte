import React, { useState, useEffect } from 'react';
import { getTests } from '../services/TestService';
import { Link } from 'react-router-dom';

const TestList = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      const tests = await getTests();
      setTests(tests);
    };
    fetchTests();
  }, []);

  return (
    <div>
      <h2>Available Tests</h2>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>
            <Link to={`/test/${test.id}`}>{test.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestList;

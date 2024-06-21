import React, { useEffect, useState } from 'react';
import { firestore } from './firebase'; // Adjust import path as per your file structure

function Dashboard() {
  const [userResults, setUserResults] = useState([]);

  useEffect(() => {
    const fetchUserResults = async () => {
      try {
        const userResultsRef = await firestore.collection('userResults').get();
        const results = userResultsRef.docs.map(doc => doc.data());
        setUserResults(results);
      } catch (error) {
        console.error('Error fetching user results:', error);
      }
    };

    fetchUserResults();
  }, []);

  const calculateMedianTime = () => {
    // Implement median time calculation
    // Example: Calculate median time from userResults
    const times = userResults.map(result => result.timeTaken);
    times.sort((a, b) => a - b);
    const medianIndex = Math.floor(times.length / 2);
    return times.length % 2 === 0 ? (times[medianIndex - 1] + times[medianIndex]) / 2 : times[medianIndex];
  };

  return (
    <div>
      <h1>IQ Test Results Dashboard</h1>
      <h3>Median Time Taken: {calculateMedianTime()} seconds</h3>
      <ul>
        {userResults.map((result, index) => (
          <li key={index}>
            <div>User ID: {result.uid}</div>
            <div>Time Taken: {result.timeTaken} seconds</div>
            <div>Correctness: {result.correct ? 'Correct' : 'Incorrect'}</div>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

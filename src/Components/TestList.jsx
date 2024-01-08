import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestList = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:8000/test-list'); // Backend endpoint'i
        setTests(response.data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchTests();
  }, []);

  return (
    <div>
      <h2>Test Listesi</h2>
      <ul>
        {tests.map(test => (
          <li key={test.id}>
            <p>List: {test.list}</p>
            <p>Content: {test.content}</p>
            {/* Diğer alanları da buraya ekleyebilirsiniz */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestList;
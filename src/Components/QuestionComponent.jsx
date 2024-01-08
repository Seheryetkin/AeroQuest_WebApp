import React, { useState, useEffect } from 'react';

function QuestionComponent() {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    try {

      const response = await fetch('http://127.0.0.1:8000/get-questions');

      const data = await response.json();

      setQuestions(data);
      console.log(data);
    } catch (error) {
      console.error('Veri alınamadı:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Sorular</h2>
      <ul>
        {questions.map((element, index) => (
          <li key={index}>
            <h1>{element.özellik}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionComponent;
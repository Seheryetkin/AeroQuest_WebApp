import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

const CorrectButton = styled(Button)`
  background-color: #4caf50; /* Yeşil renk kodu */
  color: white;
`;

const IncorrectButton = styled(Button)`
  background-color: #f44336; /* Kırmızı renk kodu */
  color: white;
`;


const ButtonToggle = styled(Button)`
  opacity: ${({ active, correct }) => (active ? (correct ? 1 : 0.6) : 0.6)};
  background-color: ${({ active, correct }) =>
    active ? (correct ? "green" : "red") : "black"};
`;

const ButtonGroup = styled.div`
  display: flex;
`;


const PanelTest = ({ params }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(new Map());
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1); // Sayfa başına soru sayısı




  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/get-questions?param=${params}`
        );
        if (!response.ok) {
          throw new Error("Sorular yüklenirken bir hata oluştu");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, [params]);

  // Sayfalama için hesaplamalar
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Sayfa değiştirme fonksiyonu
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const checkAnswer = (selectedAnswer, correctAnswer) => {
    return selectedAnswer === correctAnswer ? 'correct' : 'incorrect';
  };
  //bu fonksiyon icinde sorular icin verilen cevapları kaydediyoruz, bu kayıt sadece bu component icinde olusturdugum
  //state nesnesi olan answers arrayı icinde tutuluyor, state nesneleri sayfa yenilendiginde resetlenir yani secimler kaybolur.
  //bu nesneyi sınavı bittiginde ya da her bir soru cevaplandıgında veritabanına kaydedersen verilen cevapları saklamış olursun.

  const setSelectedAnswer = (event, index, correctAnswer) => {
    const selectedAnswer = event.target.value;
    const result = checkAnswer(selectedAnswer, correctAnswer);

    //kullanıcının yaptığı seçimi sorunun indexi ile birlikte map'e kaydediyoruz.
    setAnswers(new Map(answers.set(index, event.target.value, result)));
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-y-5 mt-10">
        {currentQuestions.map((question, index) => (

          <div key={index} className="grid grid-cols-1 gap-y-5 mt-10">
            <h3 className="px-2 py-2 border border-[#58C555]  text-gray-500 w-[650px]  min-h-[80px] max-h-[80px]  outline-none rounded-lg placeholder:px-2">
              {question.content}
            </h3>
            <ButtonGroup>

              <div className="grid grid-cols-1 gap-y-5 mt-10">


                <ButtonToggle
                  active={answers.get(index) === question.chicA}
                  correct={question.answer === "A"}
                  value={question.chicA}
                  onClick={(e) => setSelectedAnswer(e, index)}
                >
                  {question.chicA}
                </ButtonToggle>
                <ButtonToggle
                  active={answers.get(index) === question.chicB}
                  correct={question.answer === "B"}
                  value={question.chicB}
                  onClick={(e) => setSelectedAnswer(e, index)}
                >
                  {question.chicB}
                </ButtonToggle>
                <ButtonToggle
                  active={answers.get(index) === question.chicC}
                  correct={question.answer === "C"}
                  value={question.chicC}
                  onClick={(e) => setSelectedAnswer(e, index)}
                >
                  {question.chicC}
                </ButtonToggle>
                <ButtonToggle
                  active={answers.get(index) === question.chicD}
                  correct={question.answer === "D"}
                  value={question.chicD}
                  onClick={(e) => setSelectedAnswer(e, index)}
                >
                  {question.chicD}
                </ButtonToggle>

                <div className="grid grid-cols-3 gap-y-5 mt-10">
                  <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Önceki
                  </Button>
                  <Button disabled>{currentPage}</Button>
                  <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}>
                    Sonraki
                  </Button>
                </div>
              
              </div>
            </ButtonGroup>
          </div>
      
        ))}

      </div>
      {/* <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={questions.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default PanelTest;
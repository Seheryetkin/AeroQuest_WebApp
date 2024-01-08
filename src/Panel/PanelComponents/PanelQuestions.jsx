import React, { useState, useEffect } from "react";

const PanelTest = ({ params }) => {
  const [questions, setQuestions] = useState([]);
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

  return (
    <div>
      <div className="grid grid-cols-2 gap-y-5 mt-10">
        {currentQuestions.map((question, index) => (
          <div key={index} className="grid grid-cols-1 gap-y-5 mt-10">
            <h3 className="px-2 py-2 border border-[#58C555]  text-gray-500 w-[650px]  min-h-[80px] max-h-[80px]  outline-none rounded-lg placeholder:px-2">
              {question.content}
            </h3>
            <div className="grid grid-cols-1 gap-y-5 mt-10">
              {/* Şıkları ekleyin */}
              <button className="border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2">
                {question.chicA}
              </button>
              <button className="border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2">
                {question.chicB}
              </button>
              <button className="border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2">
                {question.chicC}
              </button>
              <button className="border border-[#58C555]  text-gray-500 w-[650px] h-[50px] outline-none rounded-lg placeholder:px-2">
                {question.chicD}
              </button>
            </div>
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

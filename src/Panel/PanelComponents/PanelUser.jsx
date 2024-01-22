import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const PanelTest = () => {
    const { params } = useParams()
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [questionsPerPage] = useState(5); // Sayfa başına soru sayısı

    useEffect(() => {
        const fetchQuestions = async () => {
            const parameter = "TIP-B737"
            try {
                const response = await fetch(`http://127.0.0.1:8000/get-questions?param=${params}`);
                if (!response.ok) {
                    throw new Error('Sorular yüklenirken bir hata oluştu');
                }
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuestions();
    }, []);

    // Sayfalama için hesaplamalar
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    // Sayfa değiştirme fonksiyonu
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Sorular</h1>
            <ul>
                {currentQuestions.map(question => (
                    <li key={question._id}>{question.content}</li> 
                ))}
            </ul>
            <Pagination
                questionsPerPage={questionsPerPage}
                totalQuestions={questions.length}
                paginate={paginate}
            />
        </div>
    );
};

// Pagination Component'i
const Pagination = ({ questionsPerPage, totalQuestions, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PanelTest;

import { useState } from "react";
import "./App.css";
import SetupForm from "./components/SetupForm";
import { useGlobalContext } from "./Context";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

function App() {

  const { waiting, loading, questions, correct, index, nextQuestion, checkAnswer } = useGlobalContext()

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const {question, incorrect_answers, correct_answer} = questions[index]

  const answers = [...incorrect_answers, correct_answer]

  return <main>
    <Modal />
    <section className="quiz">
      <p className="correct-answers">
        Correct answers: {correct}/{index+1}
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{__html: question}} />
      <div className="btn-container">
        {answers.map((answer, index) => {
          return <button className="answer-btn" onClick={() => checkAnswer(correct_answer === answer) } key={index} dangerouslySetInnerHTML={{__html: answer}} />
        })}
      </div>
      </article>
      <button className="next-question" onClick={nextQuestion}>next question</button>
    </section>
  </main>;
}

export default App;

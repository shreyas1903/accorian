import React, { useState } from "react";
import data from "./data";
import Single from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <section>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Single key={question.id} {...question}></Single>;
          })}
        </section>
      </div>
    </section>
  );
}

export default App;

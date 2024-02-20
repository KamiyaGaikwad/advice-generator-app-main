import "./App.css";
import { useState, useEffect } from "react";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState();

  const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const jsonData = await response.json();
        setAdvice(jsonData.slip.advice);
        setAdviceId(jsonData.slip.id);
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        <h1>Advice # {adviceId}</h1>
        <p className="advice">“{advice}”</p>
        <img src={divider} alt="divider" className="divider" />
        <div className="dice-div">
          <img src={dice} alt="dice" className="dice" onClick={() => fetchData()} />
        </div>
      </main>

      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/KamiyaGaikwad" target="_blank">Kamiya Gaikwad</a>.
      </footer>

    </>
  );
}

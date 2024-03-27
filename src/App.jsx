import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import answers from './components/answers';
import Eightball from './components/Eightball';
// const [msg, setMessage] = useState("Think of a Question","black")
const ran=Math.floor(Math.random() * answers.length)
;


function App() {
  return (
        <div className='container'>
    <div className="eightball" style={{backgroundColor:answers[ran].color}}>
      <h2>{answers[ran].msg}</h2>
      {/* <h2>{answers[ran].color}</h2> */}

      </div>
      <button className='button'>Get Answer</button>
    </div>
  );
}

export default App;

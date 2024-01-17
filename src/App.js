import { useState } from "react";

const message = ["Learn react", "Apply for jobs", "Invest Your income"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious (){
    if(step > 1) setStep(step -1);

  }

  function handleNext (){
    if(step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>

      {isOpen && (<div className='steps'>
      <div className='numbers'>
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <div className='message'>
        <p>Step {step} : {message[step-1]}</p>
      </div>

      <div className="buttons">
        <button onClick={handlePrevious} style={{backgroundColor: "#7950f2", color:"#fff"}}>Previous</button>
        <button onClick={handleNext} style={{backgroundColor: "#7950f2", color:"#fff"}}> Next</button>
      </div>
    </div>)}
    </>
    
  )
}

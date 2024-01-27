import { useState } from "react";

const stepItems = ["Dream", "Believe", "Achieve"];
function App() {
    const [step, setStep] = useState(1);
    function handleNext() {
        if (step < 3) setStep(step + 1);
    }

    function handlePrev() {
        if (step > 1) setStep(step - 1);
    }

    return (
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">Step {step}: </p>
            <div className="buttons">
                <button
                    style={{ backgroundColor: "#526D82", color: "#FFF" }}
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    style={{ backgroundColor: "#526D82", color: "#FFF" }}
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from "react"; // Import useState
import SimpleModal from "./SimpleModal";
import { useTour } from "@reactour/tour";
import { steps } from "./steps";

function App() {
  const { isOpen, setIsOpen } = useTour(steps);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentStep } = useTour();
  const { setCurrentStep } = useTour();

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
    setIsOpen(true);
  };

  useEffect(() => {
    if (currentStep === 3) {
      setIsOpen(false);
      setIsModalOpen(true);
      setTimeout(() => {
        goToStep(3);
      }, 1000);
    }
  }, [currentStep]);

  return (
    <>
      <div
        id="step1"
        style={{ background: "lightblue", padding: "20px", margin: "10px" }}
      >
        <h1>Step 1</h1>
        <p>This is some content for the first step.</p>
      </div>
      <div
        id="step2"
        style={{ background: "lightgreen", padding: "20px", margin: "10px" }}
      >
        <h1>Step 2</h1>
        <p>And this is content for the second step.</p>
      </div>
      <button onClick={() => goToStep(0)}>Start Tour</button>
      <div
        style={{ background: "lightcoral", padding: "20px", margin: "10px" }}
      >
        <button
          className="open-modal-button"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>
      </div>
      {isModalOpen && (
        <SimpleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./mainForm.css";
import StepperUI from "./Stepper/Stepper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const steps = ["Personal Information", "Address Information", "Confirmation"];

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="formContainer">
      <StepperUI steps={steps} activeStep={activeStep} />
      <div>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          {activeStep === steps.length - 1 ? "Finish" : "Continue"}
        </Button>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};
export default MainForm;

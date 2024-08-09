import React, { useEffect, useState } from "react";
import "./mainForm.css";
import StepperUI from "./Stepper/Stepper";
import Button from "@mui/material/Button";
import Form from "./Form/Form";

const steps = ["Personal Information", "Address Information", "Confirmation"];

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  let [data, SetData] = useState(localStorage.getItem("formData") || {});

  const checkNextEnabled = (_data, index) => {
    if (index === 0) {
      return (
        _data.name !== undefined &&
        _data.email !== undefined &&
        _data.phone !== undefined &&
        _data.name !== "" &&
        _data.email !== "" &&
        _data.phone !== ""
      );
    } else if (index === 1) {
      return (
        _data.add1 !== undefined &&
        _data.add2 !== undefined &&
        _data.city !== undefined &&
        _data.zip !== undefined &&
        _data.state !== undefined &&
        _data.add1 !== "" &&
        _data.add2 !== "" &&
        _data.city !== "" &&
        _data.zip !== "" &&
        _data.state !== ""
      );
    } else if (index === 2) {
      return true;
    } else {
      return false;
    }
  };

  //disabling or enabling next button
  useEffect(() => {
    let tmp = checkNextEnabled(data, activeStep);
    if (tmp !== enableNext) {
      setEnableNext(tmp);
    }
  }, [data, activeStep]);

  //getting data from local storage when step Changes
  useEffect(() => {
    SetData(localStorage.getItem("formData") || {});
  }, [activeStep]);

  const [enableNext, setEnableNext] = useState(
    checkNextEnabled(data, activeStep)
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  return (
    <div className="formContainer">
      <StepperUI steps={steps} activeStep={activeStep} />
      <Form index={activeStep} data={data} SetData={SetData} />
      <div>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 1, mr: 1 }}
          disabled={!enableNext}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
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

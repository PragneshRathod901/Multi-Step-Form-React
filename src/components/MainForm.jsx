import React, { useEffect, useState } from "react";
import "./mainForm.css";
import StepperUI from "./Stepper/Stepper";
import Button from "@mui/material/Button";
import Form from "./Form/Form";

const steps = ["Personal Information", "Address Information", "Confirmation"];

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState({});
  let [data, SetData] = useState(localStorage.getItem("formData") || {});

  const checkNextEnabled = (_data, _err, index) => {
    if (index === 0) {
      return (
        !!_data.name &&
        !!_data.email &&
        !!_data.phone &&
        !_err.name &&
        !_err.email &&
        !_err.phone
      );
    } else if (index === 1) {
      return (
        !!_data.add1 &&
        !!_data.add2 &&
        !!_data.city &&
        !!_data.zip &&
        !!_data.state &&
        !_err.add1 &&
        !_err.add2 &&
        !_err.city &&
        !_err.zip &&
        !_err.state
      );
    } else if (index === 2) {
      return true;
    } else {
      return false;
    }
  };

  //disabling or enabling next button
  useEffect(() => {
    let tmp = checkNextEnabled(data, error, activeStep);
    if (tmp !== enableNext) {
      setEnableNext(tmp);
    }
  }, [data, activeStep]);

  //getting data from local storage when step Changes
  useEffect(() => {
    try {
      SetData(JSON.parse(localStorage.getItem("formData")) || {});
    } catch (e) {
      console.error(e);
    }
  }, [activeStep]);
  const [enableNext, setEnableNext] = useState(
    checkNextEnabled(data, activeStep)
  );

  const handleNext = () => {
    if (activeStep === 2) {
      HandleFinish();
    } else {
      handleSave();
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSave = () => {
    localStorage.setItem("formData", JSON.stringify(data));
  };
  const HandleFinish = () => {
    localStorage.removeItem("formData");
    setActiveStep(0);
  };
  return (
    <div className="formContainer">
      <StepperUI steps={steps} activeStep={activeStep} />
      <Form
        index={activeStep}
        data={data}
        SetData={SetData}
        error={error}
        setError={setError}
      />
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

import React, { useState } from "react";
import { Confirm } from "./Confirm";
import { FormPersonalDetails } from "./FormPersonalDetails";
import { FormUserDetails } from "./FormUserDetails";
import {Success} from "./Success";
export const UserForm = () => {
  const [step, setStep] = useState(1);
  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (input) => (e) => {
    setUserForm({ ...userForm, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={userForm}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={previousStep}
          handleChange={handleChange}
          values={userForm}
        />
      );
    case 3:
      return (
        <Confirm
          prevStep={previousStep}
          nextStep={nextStep}
          values={userForm}
        />
      );
    case 4:
      return <Success />;
    default:
  }

  return <div></div>;
};

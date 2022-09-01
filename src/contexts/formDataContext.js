import React, { useState } from "react";
import { FORM_DATA_ENDPOINT } from "../helpers/config.js";
import axios from "axios";

const FormDataContext = React.createContext();

const FormDataContextProvider = (props) => {
  const [formData, setFormData] = useState({});
  const [formDataError, setFormDataError] = useState("");

  const getAllFormData = () => {
    axios
      .get(FORM_DATA_ENDPOINT)
      .then((response) => {
        console.log("formDataAfterApiCall:", response.data.res);
        setFormData(response.data.res);
      })
      .catch((error) => {
        console.log("errorAfterApiCall:", error);
        setFormDataError(error);
      });
  };

  return (
    <FormDataContext.Provider
      value={{
        formData,
        formDataError,
        getAllFormData,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FormDataContextProvider };

import React from "react";
import CompetencyLevel from "./CompetencyLevel";
import { profileRadioOptions } from "./data";

const CompetencyList = ({ initVals, setFieldValue }) => {
  return Object.entries(initVals)
    .slice(0, 2)
    .map((item, i) => {
      console.log("initValsFromComponent:", initVals);
      console.log("itemFromComponent", item);
      console.log("item[1].nameFromComponent:", item[1].name);
      console.log("iFromComponent", i);
      return (
        <CompetencyLevel
          id={item[1].id}
          control="radio"
          label={item[1].name}
          name={item[1].name}
          options={profileRadioOptions}
          setFieldValue={setFieldValue}
        />
      );
    });
};

export default CompetencyList;

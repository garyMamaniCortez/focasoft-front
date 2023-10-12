import React from "react";

const Label = ({LabelType, children}) => {
    return (
      <label  className={`${LabelType == "FormLabel" ? "FormLabel" : ""}
      ${LabelType == "FormTitle" ? "FormTitle" : ""}
      ${LabelType == "ListBody" ? "ListBody" : ""}
      `}>
        {children}
      </label>
    );
  }
  
  export default Label;

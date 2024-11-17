import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputComponentProps {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({
  value,
  error,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <PhoneInput
        country="sa"
        value={value}
        onChange={onChange}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: false,
        }}
        inputStyle={{
          width: "100%",
          height: "56px",
          paddingLeft: "50px",
        }}
        containerStyle={{ marginBottom: "2rem", direction: "ltr" }}
        buttonStyle={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          border: "none",
          backgroundColor: "transparent",
        }}
        onlyCountries={["sa", "ae", "eg", "jo", "lb", "kw", "om", "qa", "bh"]}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PhoneInputComponent;

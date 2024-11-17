import React from "react";

interface EmailInputProps {
  value: string;
  error?: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  value,
  error,
  onChange,
  placeholder,
}) => {
  return (
    <div className="my-4">
      <label htmlFor="email" className="sr-only">
        {placeholder}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-3 border rounded-md focus:ring-0 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default EmailInput;

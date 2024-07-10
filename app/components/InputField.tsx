import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
}) => {
  return (
    <div className={`mb-4 w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="font-bold lg:text-lg block mb-3">
          {label}<span className="text-[#910B15]">*</span>
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="border border-[#501B1F] bg-[#F2EEED] rounded-[9px] w-full h-[55px] px-3"
      />
    </div>
  );
};

export default InputField;

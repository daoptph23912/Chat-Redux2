import React from "react";
import { Input } from "antd";

const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  autoComplete,
  onFocus,
}) => {
  return (
    <Input
      className="form-input-register"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      onFocus={onFocus}
    />
  );
};

export default InputField;

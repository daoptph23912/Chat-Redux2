import React from "react";
import { Input } from "antd";

const LoginInput = ({ name, value, placeholder, type, onChange, onFocus }) => (
  <Input
    className="form-input"
    onChange={onChange}
    autoComplete={name}
    placeholder={placeholder}
    type={type}
    value={value}
    onFocus={onFocus}
  />
);

export default LoginInput;

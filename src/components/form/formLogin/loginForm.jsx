import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../../../redux/actions/authAction";
import LoginError from "../../../common/containers/error/loginError";
import LoginInput from "../../../common/containers/input/loginInput";
import { ButtonLogin } from "../../../common/containers/button/buttonLogin";
import "./loginForm.scss";
import "../../../pages/loginPage/Login.scss";

function FormLogin() {
  const [acc, setAcc] = useState("Anhdao2002");
  const [pass, setPass] = useState("Anhdao2002");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.auth);
  const { login } = authAction;

  const handleSubmit = async () => {
    const userDataLogin = { Username: acc, Password: pass };
    dispatch(login(userDataLogin));
  };

  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user, navigate]);

  return (
    <Form
      className="form-login-post"
      method="POST"
      onFinish={handleSubmit}
      form={form}
      initialValues={{ acc: "Anhdao2002", pass: "Anhdao2002" }}
    >
      <Form.Item
        name="acc"
        rules={[{ required: true, message: "Vui lòng nhập tài khoản" }]}
      >
        <LoginInput
          name="acc"
          placeholder="Nhập tài khoản"
          type="text"
          onChange={(e) => setAcc(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="pass"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
      >
        <LoginInput
          name="pass"
          placeholder="**********"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
      </Form.Item>
      <LoginError loading={loading} error={error} />
      <p className="remember-pass">
        <Link to="/">Quên mật khẩu ?</Link>
      </p>
      <Form.Item>
        <ButtonLogin handleSubmit={handleSubmit} />
      </Form.Item>
    </Form>
  );
}

export default FormLogin;

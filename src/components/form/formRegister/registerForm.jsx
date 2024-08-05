import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../../../redux/actions/authAction";
import "../../../pages/registerPage/Register.scss";
import { ButtonRegister } from "../../../common/containers/button/buttonRegister";
import InputField from "../../../common/containers/input/registerInputField";
import LoadingErrorr from "../../../common/containers/error/registerError";
import "./registerForm.scss";

function FormRegister() {
  const [fullname, setFullname] = useState("");
  const [acc, setAcc] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const { register } = authAction;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);
  const [form] = Form.useForm();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const userRegister = {
        FullName: values.fullname,
        Username: values.acc,
        Password: values.pass,
      };
      dispatch(register(userRegister));
    } catch (errorInfo) {
      console.log("Validation Failed:", errorInfo);
    }
  };

  useEffect(() => {
    if (user && !error) {
      navigate("/chat");
    }
  }, [user, error, navigate]);

  return (
    <>
      <Form className="form-register-post" method="POST" form={form}>
        <Form.Item
          name="fullname"
          rules={[
            { required: true, message: "Vui lòng nhập họ tên" },
            {
              pattern: /^[\p{L}\s]{8,}$/u,
              message:
                "Họ tên phải chứa ít nhất 8 ký tự, bao gồm dấu cách và dấu.",
            },
          ]}
        >
          <InputField
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Nhập họ tên"
            type="text"
            autoComplete="FullName"
          />
        </Form.Item>

        <Form.Item
          name="acc"
          rules={[
            { required: true, message: "Vui lòng nhập tài khoản" },
            {
              min: 6,
              message: "Tài khoản phải chứa ít nhất 6 ký tự.",
            },
          ]}
        >
          <InputField
            name="acc"
            value={acc}
            onChange={(e) => setAcc(e.target.value)}
            placeholder="Nhập tài khoản"
            type="text"
            autoComplete="Username"
          />
        </Form.Item>

        <Form.Item
          name="pass"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu" },

            {
              min: 6,
              message: "Mật khẩu phải chứa ít nhất 6 ký tự.",
            },
            {
              pattern: /^(?=.*[!@#$%^&*])/,
              message: "Mật khẩu phải chứa ít nhất một ký tự đặc biệt.",
            },
          ]}
        >
          <InputField
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Nhập mật khẩu"
            type="password"
            autoComplete="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPass"
          dependencies={["pass"]}
          rules={[
            { required: true, message: "Vui lòng nhập lại mật khẩu" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("pass") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không khớp!"));
              },
            }),
          ]}
        >
          <InputField
            name="confirmPass"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Nhập lại mật khẩu"
            type="password"
            autoComplete="confirmPassword"
          />
        </Form.Item>

        <LoadingErrorr loading={loading} error={error} />

        <Form.Item>
          <ButtonRegister handleRegister={handleRegister} />
        </Form.Item>
      </Form>
    </>
  );
}

export default FormRegister;

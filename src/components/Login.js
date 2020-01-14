import React from "react";
import { useForm } from "react-hook-form";
import "../login-style.css";

export default function Login() {
  const {
    handleSubmit,
    register,
    errors,
  } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <>
      <h3>Login Page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input name="email" ref={register(ValidateForm.email)} />
        {errors.email && <p> {errors.email.message}</p>}
        <label>Password</label>
        <input name="password" ref={register(ValidateForm.password)} />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" />
      </form>
    </>
  );
}
export const ValidateForm = {
  email: {
    required: "Required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "invalid email address"
    }
  },
  password: {
    required: "Required",
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message: "password must be contain digits, alphabet, ..."
    }
  }
};

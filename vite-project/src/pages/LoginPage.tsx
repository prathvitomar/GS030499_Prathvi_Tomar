import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Use React Router's navigate

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(login({ ...formData, navigate })); // ✅ Pass navigate function
  }

  return <Login name={formData.name} password={formData.password} handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default LoginPage;

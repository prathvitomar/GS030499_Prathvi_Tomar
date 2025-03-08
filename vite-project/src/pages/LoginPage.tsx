import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectAuth } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector(selectAuth);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(login(formData));

    // If login fails, navigate to signin
    setTimeout(() => {
      if (error) {
        alert(error);
        navigate("/signin");
      } else if (isAuthenticated) {
        navigate("/stores");
      }
    }, 100);
  }

  return (
    <Login
      name={formData.name}
      password={formData.password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;

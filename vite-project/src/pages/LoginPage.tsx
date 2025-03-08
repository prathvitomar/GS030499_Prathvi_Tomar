import React, { useState, useEffect } from "react";
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
  }

  // **Fix Navigation by using useEffect**
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/stores");
    } else if (error) {
      alert(error);
    }
  }, [isAuthenticated, error, navigate]);

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

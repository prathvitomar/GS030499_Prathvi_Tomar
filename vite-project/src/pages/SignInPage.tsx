import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn';
import { useDispatch } from 'react-redux';
import { register } from '../features/authSlice';

function SignInPage() {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(register({ ...formData, navigate })); // ✅ Pass navigate function
  }

  return <SignIn name={formData.name} password={formData.password} handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default SignInPage;

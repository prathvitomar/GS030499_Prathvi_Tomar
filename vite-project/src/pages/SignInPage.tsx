// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SignIn from '../components/SignIn/SignIn';

// function SignInPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
    
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     // Check if user already exists
//     const userExists = users.some((user: { name: string }) => user.name === formData.name);
    
//     if (userExists) {
//       alert("User already exists! Please log in.");
//       navigate("/login");
//       return;
//     }

//     users.push(formData);
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Account created successfully! Please log in.");
//     navigate("/login");
//   }

//   return (
//     <SignIn 
//       name={formData.name} 
//       password={formData.password} 
//       handleChange={handleChange} 
//       handleSubmit={handleSubmit} 
//     />
//   );
// }

// export default SignInPage;





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

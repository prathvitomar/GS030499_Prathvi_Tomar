import React, { useState } from 'react'
import Login from '../components/Login/Login'

function LoginPage() {
  const [formData, setFormData] = useState({
    name : "",
    password : ""
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setFormData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  return (
    <>
        <Login name={formData.name} password={formData.password} handleChange={handleChange}/>
    </>
  )
}

export default LoginPage
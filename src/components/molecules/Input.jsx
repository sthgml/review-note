import React, { useEffect, useRef } from 'react'

export default function Input({
  label,
  type,
  id,
  name,
  className,
  placeholder,
  onKeyUp,
  error,
  warningText,
  isRequired,
}) {
  const input = useRef();

  useEffect(()=>{
    inputEmail.current.value = email;
    inputPassword.current.value = password;
  },[email, password]);

  return (
    <div className="input-div">
      {label 
      && <label htmlFor={id}>
          {label}
      </label>}
      <input 
        ref={input}
        type={type} 
        id={id} 
        name={name} 
        className={className} 
        placeholder={placeholder}
        onKeyUp={onKeyUp} 
        required={isRequired} 
      />
      {error 
      && <p className="warning-text">
        {warningText}
      </p>}
  </div>
  )
}

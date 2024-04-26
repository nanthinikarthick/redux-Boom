import React from 'react'

const  Input=({ type,value,onChange,className,placeholder,id,disabled}) => {
  return (
    <input 
    type={type}
    className={className}
    value={value}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    disabled={disabled}/>

  );
};
 export default Input;
import React from 'react';
import '../../assets/css/input.css';

export default ( {input, type = 'text', label, size = 's12', meta: {touched, error}} ) => (
    <div className={`input-field col ${size}`}>
        <input {...input} type={type} id={input.name} autoComplete="off" />
        <label htmlFor={input.name}>{label}</label>
        <p className="blue-text text-darken-4">{touched && error}</p>
    </div>
)

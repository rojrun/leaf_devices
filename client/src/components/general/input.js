import React from 'react';
import '../../assets/css/input.css';

export default ( {input, type = 'text', label, size = 's12', meta: {touched, error}} ) => {
    return (
        <div className={`input-field col ${size}`}>
            <input {...input} type={type} id={input.name} autoComplete="off"/>
            <label htmlFor={input.name}>{label}</label>
            <p className="inputError">{touched && error}</p>
        </div>
    );
}

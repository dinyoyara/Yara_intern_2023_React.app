import React from 'react';

import StyledInput from './styledInput';

const Input = ({ type, id, placeholder, label, width, value, onChange }) => {
    return (
        <StyledInput width={width}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
        </StyledInput>
    );
};

export default Input;

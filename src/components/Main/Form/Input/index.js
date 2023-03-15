import React from 'react';

import StyledInput from './styledInput';

const Input = ({ type, id, placeholder, label, width }) => {
    return (
        <StyledInput width={width}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} />
        </StyledInput>
    );
};

export default Input;

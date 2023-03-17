import styled from 'styled-components';

const StyledInputContainer = styled('div')`
    height: ${(p) => p.height};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1rem;
`;

const StyledInput = styled('input')`
    padding 5px;
    background: rgba(192,192,192, 0.2);
    border: none;
    border-radius: 5px;
`;

export { StyledInputContainer, StyledInput };

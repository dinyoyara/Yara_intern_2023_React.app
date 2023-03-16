import styled from 'styled-components';

const StyledForm = styled('form')`
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    margin: 30px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledError = styled('div')`
    font-size: 14px;
    color: red;
`;

export { StyledForm, StyledError };

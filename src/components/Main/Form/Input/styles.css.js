import styled from 'styled-components';

const StyledInput = styled('div')`
    height: ${(p) => p.height};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1rem;
`;

export default StyledInput;

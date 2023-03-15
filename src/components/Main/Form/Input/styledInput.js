import styled from 'styled-components';

const StyledInput = styled.div`
    width: ${(p) => p.width};
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
`;

export default StyledInput;

import styled from 'styled-components';

const StyledSidebar = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: ${(p) => p.height};
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
`;

export default StyledSidebar;

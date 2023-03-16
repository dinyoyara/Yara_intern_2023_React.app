import styled from 'styled-components';

const StyledRow = styled('tr')`
    width: 100%;
    border: 0.5px solid black;
    color: ${(p) => p.color};
    background: ${(p) => p.bgc};
    height: ${(p) => p.height};
`;

export default StyledRow;

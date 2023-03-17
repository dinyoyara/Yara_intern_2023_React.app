import styled from 'styled-components';

const StyledImage = styled('img')`
    height: ${(p) => p.height};
    width: ${(p) => p.width};
    cursor: pointer;
`;

export default StyledImage;

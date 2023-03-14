import styled from 'styled-components';

const StyledImage = styled('img')`
    height: ${(p) => p.height};
    width: ${(p) => p.width};
`;

export default StyledImage;

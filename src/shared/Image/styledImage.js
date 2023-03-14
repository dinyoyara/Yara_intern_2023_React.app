import styled from 'styled-components';

const StyledLogo = styled('img')`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
`;

export default StyledLogo;

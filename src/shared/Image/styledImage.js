import styled from 'styled-components';

const StyledImg = styled('img')`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
`;

export default StyledImg;

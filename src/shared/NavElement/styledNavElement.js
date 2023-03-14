import styled from 'styled-components';

import NavElement from '.';

const StyledNavElement = styled(NavElement)`
    height: ${(p) => p.height};
    width: ${(p) => p.width};
    cursor: pointer;
    font-size: 0.6rem;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    line-height: ${(p) => p.height};
    border-radius: 0.5rem;
    color: white;
    font-weight: bolder;
    margin-bottom: 0.5rem;
`;

export default StyledNavElement;

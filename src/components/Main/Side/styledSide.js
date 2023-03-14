import styled from 'styled-components';

import Side from '.';
import { logoSize } from '../../../styles/const';

const StyledSide = styled(Side)`
    width: 100%;
    height: calc(100vh - ${logoSize}px);
    background: rgba(0, 0, 0, 0.1);
`;

export default StyledSide;

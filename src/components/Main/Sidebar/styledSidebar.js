import styled from 'styled-components';

import Sidebar from '.';
import { logoSize } from '../../../styles/const';

const StyledSidebar = styled(Sidebar)`
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - ${logoSize}px);
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
`;

export default StyledSidebar;

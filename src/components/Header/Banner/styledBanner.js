import styled from 'styled-components';

import Banner from '.';
import { logoSize } from '../../../styles/const';

const StyledBanner = styled(Banner)`
    height: ${logoSize}px;
    background: rgba(0, 0, 0, 0.1);
`;

export default StyledBanner;

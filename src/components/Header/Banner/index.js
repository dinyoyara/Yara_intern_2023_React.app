import React from 'react';

import StyledBanner from './styledBanner';

const Banner = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default StyledBanner(Banner);

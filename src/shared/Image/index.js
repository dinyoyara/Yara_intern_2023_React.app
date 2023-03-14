import React from 'react';

import StyledImg from './styledImage';

const Img = (...props) => {
    return <img src={props.src} alt={props.logo} />;
};

export default StyledImg(Img);

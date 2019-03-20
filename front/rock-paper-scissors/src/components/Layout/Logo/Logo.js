import React, {Fragment} from 'react';

import logoPath from '../../../assets/img/logo.png'; 

const logo = ( props ) => (
    <Fragment>
        <img src={logoPath} alt="logo" className="logo-img"></img>
    </Fragment>
);

export default logo;
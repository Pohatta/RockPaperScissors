import React, {Fragment} from 'react';

import Navigation from '../../components/Layout/Navigation/Navigation';
import Footer from '../../components/Layout/Footer/Footer';

const layout = ( props ) => (
    <Fragment>
        <Navigation/>
            <main className="main-content">
                {props.children}
            </main>
        <Footer/>
    </Fragment>
);

export default layout;
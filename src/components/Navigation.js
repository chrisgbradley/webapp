import React from 'react';
import {Link} from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () => (
    <div>
        <ul>
            <li><Link to={routes.SIGN_IN}></Link></li>
            <li><Link to={routes.LANDING}></Link></li>
            <li><Link to={routes.DASHBOARD}></Link></li>
        </ul>
    </div>
);
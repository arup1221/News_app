import React from 'react';
import Explore from './Explore/explore';
import News from './Explore/news';
import { Link, useLocation } from 'react-router-dom';

function explrbtn() {
    const location = useLocation();
    if (location.pathname !== '/news') {
        return (
            <Link to="/news" element={<News />} >
                <Explore />
            </Link>
        );
    }
    return null;
}

export default explrbtn;

import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = () => ( //whole homepage
    <div className='homepage'>
        <Directory /> {/*5 squares*/}
    </div> 
);

export default HomePage;

import React from 'react';
import { SwiperMobile, SwiperDesktop} from './Swipers';

const SwiperProjects: React.FC = React.memo(() => {
    return (
        <div className="container">
            <div className="row d-lg-none">
                <SwiperMobile />
            </div>
            <div className='row d-none d-md-none d-lg-block my-md-5'>
                <SwiperDesktop />
            </div>
        </div>
    );
});

export default SwiperProjects;

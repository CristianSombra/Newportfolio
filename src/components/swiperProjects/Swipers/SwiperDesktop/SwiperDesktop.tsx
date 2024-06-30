import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { nursingHRRG, portfolio, dashboard } from '../../../../assets';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import '../../../../styles';


SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperDesktop: React.FC = React.memo(() => {
    return (
        <div className="container swiper-container">
            <div className="row">
                <div className="col-12">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={nursingHRRG} className='img-fluid' alt="Departamento Enfermería" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={portfolio} className='img-fluid' alt="Prototipo Portafolio" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={dashboard} className='img-fluid' alt="Prototipo Dashboard" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
});


export default SwiperDesktop;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';


// const SwiperDesktop: React.FC = React.memo(() => {
//     return (
//         <div className="container swiper-container">
//             <div className="row">
//                 <div className="col-12">
//                     <Swiper
//                         effect="coverflow"
//                         grabCursor={true}
//                         centeredSlides={true}
//                         slidesPerView={3}
//                         coverflowEffect={{
//                             rotate: 15,
//                             stretch: 0,
//                             depth: 300,
//                             modifier: 1,
//                             slideShadows: true,
//                         }}
//                         modules={[Pagination, EffectCoverflow]}
//                         className="mySwiper"
//                     >
//                         <SwiperSlide>
//                             <img src={nursingHRRG} className='img-fluid' alt="Departamento Enfermería" />
//                             {/* <div className="row d-flex justify-content-center">
//                                 <div className="col-6 col-md-4 col-lg-2 my-3">
//                                     <FontAwesomeIcon icon={faGithub} className="icon-swiper" />
//                                 </div>
//                                 <div className="col-6 col-md-4 col-lg-2 my-3">
//                                     <FontAwesomeIcon icon={faLaptop} className="icon-swiper" />
//                                 </div>
//                             </div> */}
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <img src={portfolio} className='img-fluid' alt="Prototipo Portafolio" />
//                             {/* <div className="row d-flex justify-content-center">
//                                 <div className="col-6 col-md-4 col-lg-2 my-3">
//                                     <FontAwesomeIcon icon={faGithub} className="icon-swiper" />
//                                 </div>
//                                 <div className="col-6 col-md-4 col-lg-2 my-3">
//                                     <FontAwesomeIcon icon={faLaptop} className="icon-swiper" />
//                                 </div>
//                             </div> */}
//                         </SwiperSlide>
//                         <SwiperSlide>
//                             <img src={dashboard} className='img-fluid' alt="Prototipo Dashboard" />
//                             {/* <div className="row d-flex justify-content-center">
//                                 <div className="col-6 col-md-4 col-lg-2 my-3">
//                                     <FontAwesomeIcon icon={faGithub} className="icon-swiper" />
//                                 </div>
//                                 <div className="col-6 col-md-4 col-lg-2 my-3">
//                                     <FontAwesomeIcon icon={faLaptop} className="icon-swiper" />
//                                 </div>
//                             </div> */}
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
//});

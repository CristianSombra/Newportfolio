import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import SwiperCore from 'swiper/core'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { portfolio, dashboard } from '../../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import '@/styles';


SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperDesktop: React.FC = React.memo(() => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
    };

   return (
        <div className="container swiper-container" aria-label='Proyectos destacados'>
            <div className="row">
                <div className="col-12">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        className="mySwiper"
                        onSlideChange={handleSlideChange}
                    >
                        <SwiperSlide>
                            <motion.div
                                animate={{opacity: activeIndex === 0 ? 1 : 0}}
                            >
                                <h4 style={{color: '#04D004', fontWeight: 'bold'}}>Portafolio fotógrafo</h4>
                                <h5>Prototipo</h5>
                                <a href="https://github.com/CristianSombra/Portafolioadaptable" target="_blank" rel="noopener noreferrer" aria-label="Ver código en GitHub">
                                    <FontAwesomeIcon icon={faGithub} className="mb-3 icon-swiper-desktop" />
                                </a>
                                <a href="https://portafolioadaptable.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Ver sitio web">
                                    <FontAwesomeIcon icon={faLaptop} className="mb-3 icon-swiper-desktop" />
                                </a>
                            </motion.div>
                            <img src={portfolio} className='img-fluid' alt="Prototipo Portafolio" loading="lazy"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                animate={{opacity: activeIndex === 1 ? 1 : 0}}
                            >
                                <h4 style={{color: '#04D004', fontWeight: 'bold'}}>Panel de información</h4>
                                <h4>Prototipo</h4>
                                <a href="https://github.com/CristianSombra/Dashboardadaptable" target="_blank" rel="noopener noreferrer" aria-label="Ver código en GitHub">
                                    <FontAwesomeIcon icon={faGithub} className="mb-3 icon-swiper-desktop" />
                                </a>
                                <a href="https://dashboardadaptable.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Ver sitio web">
                                    <FontAwesomeIcon icon={faLaptop} className="mb-3 icon-swiper-desktop" />
                                </a>
                            </motion.div>
                            <img src={dashboard} className='img-fluid' alt="Prototipo Dashboard" loading="lazy"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
});


export default SwiperDesktop;

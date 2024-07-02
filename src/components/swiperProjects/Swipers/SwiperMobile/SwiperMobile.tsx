import React, { useState } from 'react';
import SwiperCore from 'swiper/core'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { nursingHRRG, portfolio, dashboard } from '../../../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import '@/styles';

SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperMobile: React.FC = React.memo(() => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex)
    }

    return (
        <div className="container">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                pagination={{ clickable: true }}
                onSlideChange={handleSlideChange}
            >
                {/* Imagen con botones 1 */}
                <SwiperSlide>
                    <motion.div
                        animate={{opacity: activeIndex === 0 ? 1 : 0}}
                        className="swiper-element"
                        >
                        <h4 style={{color: '#04D004', fontWeight: 'bold'}}>Departamento de Enfermería</h4>
                        <h5>Tierra del Fuego</h5>
                        <div>
                            <FontAwesomeIcon icon={faGithub} className="mb-3 mt-1 icon-swiper-mobile" />
                            <FontAwesomeIcon icon={faLaptop} className="mb-3 mt-1 icon-swiper-mobile" />
                        </div>
                        <img src={nursingHRRG} className='img-fluid' alt="Departamento Enfermería" />
                    </motion.div>
                </SwiperSlide>

                {/* Imagen con botones 2 */}
                <SwiperSlide>
                    <motion.div 
                        animate={{opacity: activeIndex === 1 ? 1 : 0}}
                        className="swiper-element"
                        >
                        <h4 style={{color: '#04D004', fontWeight: 'bold'}}>Portafolio fotógrafo</h4>
                        <h5>Prototipo</h5>
                        <div className="icon-container-mobile">
                            <FontAwesomeIcon icon={faGithub} className="mb-3 mt-1 icon-swiper-mobile" />
                            <FontAwesomeIcon icon={faLaptop} className="mb-3 mt-1 icon-swiper-mobile" />
                        </div>
                        <img src={portfolio} className='img-fluid' alt="Prototipo Portafolio" />
                    </motion.div>
                </SwiperSlide>

                {/* Imagen con botones 3 */}
                <SwiperSlide>
                    <motion.div 
                        animate={{opacity: activeIndex === 2 ? 1 : 0}}
                        className="swiper-element"
                        >
                        <h4 style={{color: '#04D004', fontWeight: 'bold'}}>Panel de información</h4>
                        <h4>Prototipo</h4>
                        <div className="icon-container-mobile">
                            <FontAwesomeIcon icon={faGithub} className="mb-3 mt-1 icon-swiper-mobile" />
                            <FontAwesomeIcon icon={faLaptop} className="mb-3 mt-1 icon-swiper-mobile" />
                        </div>
                        <img src={dashboard} className='img-fluid' alt="Prototipo Dashboard" />
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
});

export default SwiperMobile;

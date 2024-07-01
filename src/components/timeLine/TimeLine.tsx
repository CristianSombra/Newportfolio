import React from "react";
import { TA, FS, B5, UI, CS } from "../../assets";
import "../../styles";


const TimeLine: React.FC = React.memo(() => {
    return(
        <div className="container-timeline">
            <div className="timeline">
                <div className="container-line left-container">
                <img src={TA}/>
                <div className="text-box">
                    <h4 className='color-custom'>Teaching Assistant</h4>
                    <small className='text-white'>Jul. 2023 - Oct. 2023</small>
                    <p>Tuve la oportunidad de liderar a un grupo de estudiante en el Bootcamp donde me recibí.</p>
                    <span className="left-container-arrow"></span>
                </div>
                </div>

                <div className="container-line right-container">
                <img src={FS}/>
                <div className="text-box">
                    <h4 className='color-custom'>Desarrollador Full Stack</h4>
                    <small className='text-white'>Feb. 2023 - Oct. 2023</small>
                    <p>Formación como Desarrollador Full stack en Bootcamp Henry.</p>
                    <span className="right-container-arrow"></span>
                </div>
                </div>

                <div className="container-line left-container">
                <img src={B5}/>
                <div className="text-box">
                    <h4 className='color-custom'>Certificación Bootstrap 5</h4>
                    <small className='text-white'>Diciembre 2023</small>
                    <p>Cursada teórico práctico del framework frontend Bootstrap 5 en UDEMY.</p>
                    <span className="left-container-arrow"></span>
                </div>
                </div>

                <div className="container-line right-container">
                <img src={UI}/>
                <div className="text-box">
                    <h4 className='color-custom'>Diseñador UI + Figma</h4>
                    <small className='text-white'>Marzo 2024</small>
                    <p>Bases del diseño de interfaz de usuario y la herramienta de diseño figma 2024 en UDEMY.</p>
                    <span className="right-container-arrow"></span>
                </div>
                </div>

                <div className="container-line left-container">
                <img src={CS}/>
                <div className="text-box">
                    <h4 className='color-custom'>Cursando actualmente</h4>
                    <small className='text-white'>2024</small>
                    <ul className='text-start'>
                        <li className='text-white custom-li'>Diseñador UX + Figma 2024</li> 
                        <li className='text-white custom-li'>Python Básico a Avanzado</li>
                        <li className='text-white custom-li'>MongoDB Básico a Avanzado</li>
                        <li className='text-white custom-li'>PostreSQL Nivel Avanzado</li>
                    </ul>
                    <span className="left-container-arrow"></span>
                </div>
                </div>
            </div>
        </div>
    );
});

export default TimeLine;
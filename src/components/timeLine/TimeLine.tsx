import React from "react";
import { TA, FS, B5, UI, CS } from "../../assets";
import "../../styles";


const TimeLine: React.FC = React.memo(() => {
    return(
        <div className="container-timeline">
            <div className="timeline">
                <div className="container-line left-container">
                <img src={TA} alt="Teaching Assistant"/>
                <div className="text-box">
                    <h4 className='color-custom'>Teaching Assistant</h4>
                    <small className='text-white'><time dateTime="2023-07">Jul. 2023 - Oct. 2023</time></small>
                    <p>Tuve la oportunidad de liderar a un grupo de estudiante en el Bootcamp donde me recibí.</p>
                    <span className="left-container-arrow"></span>
                </div>
                </div>

                <div className="container-line right-container">
                <img src={FS} alt="Desarrollador Full Stack"/>
                <div className="text-box">
                    <h4 className='color-custom'>Desarrollador Full Stack</h4>
                    <small className='text-white'><time dateTime="2023-02">Feb. 2023 - Oct. 2023</time></small>
                    <p>Formación como Desarrollador Full stack en Bootcamp Henry.</p>
                    <span className="right-container-arrow"></span>
                </div>
                </div>

                <div className="container-line left-container">
                <img src={B5} alt="Certificación Bootstrap 5"/>
                <div className="text-box">
                    <h4 className='color-custom'>Certificación Bootstrap 5</h4>
                    <small className='text-white'><time dateTime="2023-12">Diciembre 2023</time></small>
                    <p>Cursada teórico práctico del framework frontend Bootstrap 5 en UDEMY.</p>
                    <span className="left-container-arrow"></span>
                </div>
                </div>

                <div className="container-line right-container">
                <img src={UI} alt="Diseñador UI + Figma"/>
                <div className="text-box">
                    <h4 className='color-custom'>Diseñador UI + Figma</h4>
                    <small className='text-white'><time dateTime="2024-03">Marzo 2024</time></small>
                    <p>Bases del diseño de interfaz de usuario y la herramienta de diseño figma 2024 en UDEMY.</p>
                    <span className="right-container-arrow"></span>
                </div>
                </div>

                <div className="container-line left-container">
                <img src={CS} alt="Cursando actualmente"/>
                <div className="text-box">
                    <h4 className='color-custom'>Cursando actualmente</h4>
                    <small className='text-white'>2024</small>
                    <ul className='text-start'>
                        <li className='text-white custom-li'>Diseñador UX + Figma 2024</li> 
                        <li className='text-white custom-li'>Python Básico a Avanzado</li>
                        <li className='text-white custom-li'>MongoDB Básico a Avanzado</li>
                        <li className='text-white custom-li'>PostreSQL Nivel Avanzado</li>
                        <li className='text-white custom-li'>Estudiante de la carrera de Ciencia de datos e IA</li>
                    </ul>
                    <span className="left-container-arrow"></span>
                </div>
                </div>
            </div>
        </div>
    );
});

export default TimeLine;
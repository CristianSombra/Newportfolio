import React from "react";
import { TA, FS, B5, UI, CS } from "../../assets";
import "@/styles";

const TimeLine: React.FC = React.memo(() => {
    const timelineItems = [
        {
            img: TA,
            title: "Teaching Assistant",
            date: "Jul. 2023 - Oct. 2023",
            description: "Tuve la oportunidad de liderar a un grupo de estudiantes en el Bootcamp donde me recibí.",
            containerClass: "left-container",
            arrowClass: "left-container-arrow"
        },
        {
            img: FS,
            title: "Desarrollador Full Stack",
            date: "Feb. 2023 - Oct. 2023",
            description: "Formación como Desarrollador Full stack en Bootcamp Henry.",
            containerClass: "right-container",
            arrowClass: "right-container-arrow"
        },
        {
            img: B5,
            title: "Certificación Bootstrap 5",
            date: "Diciembre 2023",
            description: "Cursada teórico práctico del framework frontend Bootstrap 5 en UDEMY.",
            containerClass: "left-container",
            arrowClass: "left-container-arrow"
        },
        {
            img: UI,
            title: "Diseñador UI + Figma",
            date: "Marzo 2024",
            description: "Bases del diseño de interfaz de usuario y la herramienta de diseño figma 2024 en UDEMY.",
            containerClass: "right-container",
            arrowClass: "right-container-arrow"
        },
        {
            img: CS,
            title: "Cursando actualmente",
            date: "2024",
            description: (
                <ul className='text-start'>
                    <li className='text-white'>Diseñador UX + Figma 2024</li> 
                    <li className='text-white'>Python Básico a Avanzado</li>
                    <li className='text-white'>MongoDB Básico a Avanzado</li>
                    <li className='text-white'>PostgreSQL Nivel Avanzado</li>
                    <li className='text-white'>Estudiante de la carrera de Ciencia de datos e IA</li>
                </ul>
            ),
            containerClass: "left-container",
            arrowClass: "left-container-arrow"
        }
    ];

    return (
        <section className="container-timeline">
            <div className="timeline">
                {timelineItems.map((item, index) => (
                    <div key={index} className={`container-line ${item.containerClass}`}>
                        <img src={item.img} alt={item.title} loading="lazy"/>
                        <div className="text-box">
                            <h4 className='color-custom'>{item.title}</h4>
                            <small className='text-white'><time dateTime={item.date}>{item.date}</time></small>
                            <p>{item.description}</p>
                            <span className={item.arrowClass}></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default TimeLine;
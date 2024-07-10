import React from "react";
import { CardProps } from "../../components";
import '@/styles';

const CardComponent: React.FC<CardProps> = ({ imageUrl, title, text }) => {
    return(
        <div className="card card-custom mt-5 my-md-5" role="region" aria-labelledby="card-title" aria-describedby="card-text">
            <img src={imageUrl} className="card-img-top img-fluid" alt={title} loading="lazy"/>
            <div className="card-body">
                <h4 id="card-title" className="card-title mt-3">{title}</h4>
                <hr className="text-white"/>
                <p id="card-text" className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default React.memo(CardComponent);
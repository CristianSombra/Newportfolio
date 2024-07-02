import React from "react";
import CardProps from "./cardProps";
import '@/styles';

const CardComponent: React.FC<CardProps> = ({ imageUrl, title, text }) => {
    return(
        <div className="card card-custom mt-5 my-md-5">
            <img src={imageUrl} className="card-img-top img-fluid" alt={title}/>
            <div className="card-body">
                <h4 className="card-title mt-3">{title}</h4>
                <hr className="text-white"/>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default React.memo(CardComponent);
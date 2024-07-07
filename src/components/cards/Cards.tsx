import React from "react";
import { CardComponent } from "../../components";
import { CardProps } from "../../components";
import { cardsData } from "../../components/cards/CardsData";


const Cards: React.FC = () => {
    return (
        <section className="row" role="list">
            {cardsData.map((card: CardProps, index: number) => (
                <div className="col-12 col-md-6 col-lg-3" key={index} role="listitem">
                    <CardComponent 
                        imageUrl={card.imageUrl}
                        title={card.title}
                        text={card.text}
                    />
                </div>
            ))}
        </section>
    );
};

export default Cards;

import React from "react";
import TagList from "./tagList/TagList";
import '@/styles';

const TechnologiesCarousel: React.FC = React.memo(() => {
    return(
        <div className="container">
            <div className="row d-flex justify-content-center my-md-5">
                <div className="col-12 col-10">
                    <TagList />
                </div>
            </div>
        </div>
    );
});

export default TechnologiesCarousel
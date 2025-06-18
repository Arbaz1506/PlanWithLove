import React from "react";
import { useState } from "react";


function Card({ id, name, info, image, price, removeTour }) {

    const [readmore, setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadMore(!readmore);
    }

    return (
        <div className="card">

            <img src={image} className="image" alt="img"></img>
            <div className="tourInfo">

                <div>
                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>

                <div>
                    {description}
                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>

                <button className="btnRed" onClick={() => removeTour(id)}>
                    Not Interested
                </button>

            </div>












        </div>
    );
}


export default Card;
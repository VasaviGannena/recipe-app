import React from 'react';

const Card = () => {
    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{"background-color":"chartreuse"}}></div>
            <div className="recipe-holder">
                <span className="card-header" style={{ "background-color": "#F2FAF1", "border-radius": "10px" }} />
                <p>Learn cooking</p>
            </div>
            
        </div>
    );
};

export default Card;
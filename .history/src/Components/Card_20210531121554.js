import React from 'react';

const Card = ({recipeObj, index }) => {
    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{"background-color":"chartreuse"}}></div>
            <div className="recipe-holder">
                <span className="card-header" style={{ "background-color": "#F2FAF1", "border-radius": "10px" }}{RecipeObj.Name} />
                <p>{RecipeObj.Ingredients}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i className="far fa-edit" style={{ "color": "#5CD250" }}></i>
                    <i className="far fa-delete" style={{"color": "#5CD250"}}></i>
                </div>
                    
            </div>

            
        </div>
    );
};

export default Card;
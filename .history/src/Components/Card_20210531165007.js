import React, { useState } from 'react';
import EditRecipes from '../Modal/EditRecipes';

const Card = ({ RecipeObj, index, deleteRecipe, updateListArray }) => {
    const [modal, setModal] = useState(false);
    
     const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
     ]
     const toggle = () => {
        setModal(!modal);
     }
    const UpdateRecipe = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteRecipe(index)
    }
    return (
        <div className="card-wrapper mr-3">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className="recipe-holder mr-10">
                <span className="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{RecipeObj.name}</span>
                <section id="textarea"className="Ingredients"><ul><li className="ingredients" key={RecipeObj.ingredients}>{RecipeObj.ingredients}</li></ul></section>
                

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
                    
            </div>

            <EditRecipes modal = {modal} toggle = {toggle}  UpdateRecipe = {UpdateRecipe} RecipeObj = {RecipeObj}/>
        </div>


        
        

    );
};

export default Card;
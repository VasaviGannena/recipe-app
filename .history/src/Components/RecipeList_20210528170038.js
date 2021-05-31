import React, { useState } from 'react';
import CreateRecipe from '../Modal/CreateRecipe';

const RecipeList = () => {
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <>
        <div className = " header d-grid gap-2 col-1 mx-auto">
            <h3>RecipesList</h3>
            <button type="button" className="btn btn-dark" onClick = {() => setModal(true) }>AddRecipes</button>
            </div>
            <div className = "recipe-container">

            </div>
            <CreateRecipe modal={modal} toggle={toggle}/>
            
            </>
    );
};

export default RecipeList;
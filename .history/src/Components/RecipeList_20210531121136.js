import React, { useEffect, useState } from 'react';
import CreateRecipe from '../Modal/CreateRecipe';
import Card from './Card';

const RecipeList = () => {
    
    const [modal, setModal] = useState(false);

    const [RecipeList, setRecipeList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("RecipeList")
        
        if (arr) {
            let obj = JSON.parse(arr)
            setRecipeList(obj)
        }
    }, [])

    const toggle = () => setModal(!modal);


    const saveRecipe = (RecipeObj) => {
        let tempList = RecipeList
        tempList.push(RecipeObj)
        localStorage.setItem(RecipeList, JSON.stringify(tempList))
        setModal(false)
        setRecipeList(tempList)
        

        
    }
    
    return (
        <>
        <div className = " header d-grid gap-2 col-1 mx-auto">
            <h3>RecipesList</h3>
            <button type="button" className="btn btn-dark" onClick = {() => setModal(true) }>AddRecipes</button>
            </div>
            <div className="recipe-container">
                {RecipeList && RecipeList.map((obj, index) => <Card {RecipeObj = {obj} index = {index}}/>)}

            </div>
            <CreateRecipe modal={modal} toggle={toggle} save={saveRecipe}/>
            
            </>
    );
};

export default RecipeList;
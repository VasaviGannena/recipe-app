import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditRecipes = ({ modal, toggle, UpdateRecipe, RecipeObj }) => {
    
    const [RecipeName, setRecipeName] = useState('');
    const [Ingredients, setIngredients] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "RecipeName") {
        setRecipeName(value)
        } else {
        setIngredients(value)
        }

    }

    useEffect(() => {
        setRecipeName(RecipeObj.name)
        setIngredients(RecipeObj.ingredients)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['name'] = RecipeName
        tempObj['ingredients'] = Ingredients
        UpdateRecipe(tempObj)
        
        }

    return (
        
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>UpdateRecipes</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>RecipeName</label>
                        <input type="text" className="form-control" value={RecipeName} onChange={handleChange} name = "RecipeName"/>

                    </div>
                    <div className="from-group">
                        <label>Ingredients</label>
                        <textarea row = "4" className="form-control" value = {Ingredients} onChange = {handleChange} name = "Ingredients"></textarea>
                        
                    </div>
                </form>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
            </Modal>
            
    );
};

export default EditRecipes;
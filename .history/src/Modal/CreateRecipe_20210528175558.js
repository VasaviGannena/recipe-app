import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateRecipe = ({ modal, toggle, save }) => {
    
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

    const handleSave = () => {
        let RecipeObj = {}
        RecipeObj["name"] = RecipeName
        RecipeObj["ingredient"] = Ingredients
    

    }

    return (
        
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>AddRecipes</ModalHeader>
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
        <Button color="primary" onClick={handleSave}>Add</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
            </Modal>
            
    );
};

export default CreateRecipe;
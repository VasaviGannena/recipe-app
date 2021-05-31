import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateRecipe = ({modal, toggle}) => {
    return (
        
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>AddRecipes</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group row">
                        <input type = "text" className="form-control"/>

                    </div>
                    <div className="from-group">
                        <textarea row = "5"></textarea>
                        
                    </div>
                </form>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={toggle}>Add</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
            </Modal>
            
    );
};

export default CreateRecipe;
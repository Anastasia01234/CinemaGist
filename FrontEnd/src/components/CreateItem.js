import React from 'react';
import '../styles.css';
import AddUser from './AddUser';

function CreateItem() {
    const addUserHandler = (userData) => {
        
        const addUserHandler = (userData) => {
            console.log(userData)
        };
    };
    return (
        <AddUser onAddUser={addUserHandler} />
    )
}

export default CreateItem;

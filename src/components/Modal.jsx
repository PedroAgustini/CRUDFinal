import React from 'react';
import axios from "axios"

const Modal = ({ setIsActive, ID, getUsers}) => {
    const deleteUser = () => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${ID}/`)
        .then(() => getUsers())
        setIsActive(false)
    }
    return (
        <div>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-info">
                        <h3>¿Desea eliminar este usuario?</h3>
                    </div>
                    <div className="btn-options">
                        <div className="btn-delet">
                            <button className="delete" onClick={() => deleteUser()}>Eliminar</button>
                        </div>
                        <div className="btn-cancel">
                            <button className="cancel" onClick={() => setIsActive(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
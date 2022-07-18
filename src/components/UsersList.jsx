import Trash from "./Images/Trash.svg"
import Edit from "./Images/Edit.svg"

const UsersList = ({ users, setIsActive, setId, selectUser, view, setView }) => {
    const selectID = (id) => {
        setIsActive(true)
        setId(id)
    }
    return (
        <div className="users-list">
            <h2 className="user-title">Lista de usuarios:</h2>
            <button type="button" className="view" onClick={() => setView(!view)}>{view ? (
                <>
                    <h3>Ocultar contraseñas</h3>
                    <i className="fa-regular fa-eye-slash fa-two"></i>
                </>
            
            ) : (
                <>
                    <h3>Mostrar contraseñas</h3>
                    <i className="fa-regular fa-eye fa-two"></i>
                </>
            )}
            </button>
            <div className="card">
            {
            users.map(user =>(
                <div key={user.id} className="user-card">
                    <div className="card-name">
                        <p className="font-small"><i className="fa-solid fa-user fa"></i><b>Nombre y apellido: {user.first_name} {user.last_name}</b></p>
                    </div>
                    <div className="card-data">
                        <p className="font-small margin-top-10px"><i className="fa-solid fa-envelope fa"></i><b>Email: {user.email}</b></p>
                        <p className="margin-top-10px font-small"><i className="fa-solid fa-lock fa"></i><b>Contraseña: {view ? `${user.password}` : `${user.password.length} caracteres`}</b></p>                    </div>
                        <p className="font-small margin-top-10px"><b></b><i className="padding-right-4px fa fa-birthday-cake"></i>{user.birthday}</p>
                    <div className="card-icons">
                        <button onClick={() => selectID(user.id)}><img src={Trash} alt="icon-trash" className="icon-trash"/></button>
                        <button onClick={() => selectUser(user)}><img src={Edit} alt="icon-edit" className="icon-trash"/></button>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    );
    
}
export default UsersList;
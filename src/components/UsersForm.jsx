import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersForm = ({ getUsers, userSelect, deselectUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isVisible, setIsVisible] = useState(false)

  const submit = (e) => {
    e.preventDefault();
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday
    };
    if(userSelect !== null) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, user)
      .then(() => getUsers())
      deselectUser()
      reset()
    } else {
      axios.post(`https://users-crud1.herokuapp.com/users/`, user)
      .then(() => getUsers())
      reset()
    }
    };

    const reset = () => {
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
      setBirthday("")
    }

    useEffect(() => {
      if(userSelect !== null) {
        setFirstName(userSelect.first_name)
        setLastName(userSelect.last_name)
        setEmail(userSelect.email)
        setPassword(userSelect.password)
        setBirthday(userSelect.birthday)
      }
    },[userSelect])

    const resetForm = () => {
      reset()
      deselectUser()
    }
  return (
    <form onSubmit={submit} id="form-submit">
      <div className="form-title">
        <h1 className="create-user">{userSelect === null ? "Crear usuario" : "Actualizar usuario"}</h1>
      </div>
      <div className="input-container">
        <label htmlFor="first_Name" className="title-form">Nombre</label>
            <input
            className="input-form"
            type="text"
            id="first_Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Nombre"
            required
            />
        </div>
        <div className="input-container">
            <label htmlFor="last_Name" className="title-form">Apellido</label>
            <input
            className="input-form"
            type="text"
            id="last_Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Apellido"
            required
            />
        </div>
        <div className="input-container">
            <label htmlFor="email" className="title-form">Email</label>
            <input
            className="input-form"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />
        </div>
        <div className="input-container">
            <label htmlFor="password" className="title-form">Contraseña</label>
            <input
            className="input-password"
            type={isVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
            />
            <button 
            type="button" className="btn-view" 
            onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? 
              <i className="fa-regular fa-eye"></i> 
              : 
              <i className="fa-regular fa-eye-slash"></i>}
            </button>
        </div>
        <div className="input-container">
            <label htmlFor="birthday" className="title-form">Fecha de cumpleaños</label>
            <input
            className="input-date"
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Fecha de cumpleaños"
            required
            />
        </div>
      <button type="submit" className="btn-submit">{userSelect === null ? "Crear" : "Actualizar" }</button>
      <button onClick={resetForm} className="btn-reset margin-left-10px">Vaciar</button>
    </form>
  );
};

export default UsersForm;

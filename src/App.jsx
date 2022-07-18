import { useEffect, useState } from 'react'
import axios from "axios" 
import './App.css'
import UsersList from "./components/UsersList"
import UsersForm from './components/UsersForm';
import Modal from './components/Modal';

function App() {
  const [ users, setUsers ] = useState([]);
  const [isActive, setIsActive] = useState(false)
  const [ID, setId] = useState(0)
  const [userSelect, setUserSelect] = useState(null)

  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then((res) => setUsers(res.data))
  },[])
  const getUsers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then((res) => setUsers(res.data))
  }
  const selectUser = (user) => {
    setUserSelect(user)
  }
  const deselectUser = () => {
    setUserSelect(null)
  }

  const [view, setView] = useState(false)
  return (
    <div className="App">
      <div className="app-flex">
      <div className="UsersForm">
        <UsersForm 
        getUsers={getUsers} 
        userSelect={userSelect} 
        deselectUser={deselectUser}/>
      </div>
        <div className="UsersList">
          <UsersList 
          users={users} 
          getUsers={getUsers} 
          setIsActive={setIsActive} 
          setId={setId} 
          ID={ID} 
          setUserSelect={setUserSelect} 
          selectUser={selectUser} 
          view={view} 
          setView={setView}/>
        </div>
      </div>
      {isActive && <Modal getUsers={getUsers} ID={ID} setIsActive={setIsActive}/>}
    </div>
  )
}

export default App

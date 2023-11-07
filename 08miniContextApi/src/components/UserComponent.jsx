import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserComponent() {
    const {text, setText} = useContext(UserContext);

    const handleClick = () => {
        setText("Go away")
    } 
  return (
    <div>
    
        <p>Hi, there {text}</p>
        <button
        onClick={handleClick}
        >Click Me</button>
    </div>
  )
}

export default UserComponent
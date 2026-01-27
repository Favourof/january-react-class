import React, { useState } from 'react'
import { UserForm } from './component/UserForm';
import UserList from './component/UserList';

export const AppTwo = () => {
    const [userList, setUserList] = useState([{ id: 1, name: "John" }
    ]);
    const addUsers = (names) => {
        setUserList(prevUser => [...prevUser, { id: userList.length + 1, name: names }])
        console.log(userList);
    }
    return (
        <div className="app-container">
            <h2>Total Users: {userList.length}</h2>
            <UserForm addUsers={addUsers} />
            <UserList users={userList} />
        </div>
    )
}

import React, { useState } from 'react'

export const UserForm = ({ addUsers }) => {
    const [name, setName] = useState();
    const handleSubmit = () => {
        if (!name) return
        addUsers(name)
        setName('')

    }
    return (
        <div className="user-form">
            <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter user name" />
            <button onClick={handleSubmit}>Add user</button>
        </div>
    )
}

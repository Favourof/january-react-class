import React from 'react'

export default function UserList({ users }) {



    return (
        <div>
            <ul className="user-list">
                {users?.map((user) => (
                    <li style={{
                        display: "block"
                    }} key={user.id}> {user.id}. {user.name}</li>
                ))}
            </ul>
        </div>
    )
}

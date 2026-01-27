import React from 'react'
import { useParams } from 'react-router'

export const User = () => {
    let params = useParams()
    console.log(params);

    return (
        <div>User:{params.id}</div>
    )
}

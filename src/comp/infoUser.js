import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import { Link } from "react-router-dom";


const User = () => {
    const {username} = useParams();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [username])
    //company
    return(
        <div>
            {users && (
                <div>
                    <img src={users.avatar_url} alt=""/>
                    <h1>{users.name}</h1>
                    <div>
                        <p>Followers: {users.followers}</p>
                        <p>Following: {users.following}</p>
                    </div>
                    <p>Created at: {users.created_at}</p>
                        <p>Company: {users.company}</p>
                        <p>Blog: {users.blog}</p>
                    <p>Location: {users.location}</p>
                    <p>Bio: {users.bio}</p>
                    <button><Link to={"/"}>Get Back</Link></button>
                </div>
            )}
        </div>
    );
}

export default User;
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../style/main.css'

const Index = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container">
            <h1>Git Users</h1>
            {
                users.map(elem => (
                    <div className="forDis">
                        <div key={elem.login} className='prevBlock'>
                            <img src={elem.avatar_url} alt="" className='imgDis'/>
                            <Link to={`/users/${elem.login}`}>
                                <li>{elem.login}</li>
                            </Link>
                            <p>{elem.url}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Index;
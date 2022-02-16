import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import User from '../User/User';

const UserDetails = () => {

    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then(res => res.json())
      .then(data => setUser(data))
    }, [])

    return (
        <div>
            <User user={user}></User>
        </div>
    );
};

export default UserDetails;
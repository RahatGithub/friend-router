import React from 'react';
import User from '../User/User';
import './UsersList.css'

const UsersList = (props) => {
    
    const {users} = props;

    return (
        <div className='users'>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default UsersList;
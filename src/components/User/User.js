import React from 'react';
import './User.css';

const User = (props) => {

    const {user} = props;

    return (
        <div className='user'>
            <h2>{user.name}</h2>
            <h3><small>{user.email}</small></h3>
            <h3>Company: {user.company.name}</h3>
            <p><b>Official website:</b> www.{user.website} </p>
            <div className="button-group">
                <button className='main-btn'>Send Request</button>
                <button className='main-btn'>View Profile</button>
            </div>
        </div>
    );
};

export default User;
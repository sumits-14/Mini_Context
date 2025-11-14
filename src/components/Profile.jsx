import React, {useContext, useState} from 'react';
// import UserContext from '../context/UserContext';
import UserContexts from '../context/UserContexts';


function Profile() {
    const {user} = useContext(UserContexts)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile

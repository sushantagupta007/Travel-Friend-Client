import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';

const Myorder = () => {
    const history = useHistory(); 

    const {name}= history.location?.state?.id.service
    const {user} = useAuth();
    return (
        <div>
            {user.displayName}
            {name}
        </div>
    );
};

export default Myorder;
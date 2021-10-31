import React from 'react';
import useAuth from '../../Hooks/useAuth';



const Myorder = () => {
    const {user } = useAuth(); 
    return (
        <div>
            {user.displayName}
            
        </div>
    );
};

export default Myorder;
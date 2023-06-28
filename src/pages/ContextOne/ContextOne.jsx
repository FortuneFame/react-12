import React, { useContext } from 'react';

import { CountContext } from '../../App';

const ContextOne = () => {
    const { count } = useContext(CountContext); 

    return <p className="mt-3 border p-3 text-center" >Count in ContextOne: {count}</p>;
};

export default ContextOne;
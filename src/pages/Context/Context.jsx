import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CountContext } from '../../App'; 
import ContextOne from '../ContextOne';

const Context = () => {
    const { count, setCount } = useContext(CountContext);

    return (
        <div className='d-flex flex-column align-items-center justify-content-center mt-5' style={{ width: '100%'}}>
            <Typography variant="h1" className="mt-3 border p-3">{count}</Typography>
            <ContextOne className="mt-3 border p-3 text-center" />
            <div className='d-flex'>
                 <Button
                className='m-3'
                style={{ backgroundColor: '#212121', color: '#fff' }}
                variant="contained"
                onClick={() => setCount(count + 1)}>
                +
            </Button>
            <Button
                className='m-3'
                style={{ backgroundColor: '#212121', color: '#fff' }}
                variant="contained"
                onClick={() => setCount(count - 1)}>
                -
            </Button>
           </div>
        </div>
    );
};

export default Context;

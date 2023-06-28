import React from 'react';
import { createPortal } from 'react-dom';

const Portal = () => {
    return (
        <div
            // className='bg-secondary-subtle'
            // style={{ width: "100%", height: "100vh" }}
        >
            {createPortal(
                <h1 className='d-flex align-items-center justify-content-center'>
                    Мой первый портал
                </h1>, document.body
            )};
        </div>
    )
};

export default Portal;
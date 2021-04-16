import React from 'react';

const FooterCol = ({footer}) => {
    return (
        <div className='col-md-3 text-white'>
            <h4>{footer.title}</h4>
            <h6>{footer.info}</h6>
            <p className='text-secondary'>{footer.data}</p>
            
        </div>
    );
};

export default FooterCol;
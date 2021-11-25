import React from "react";

import './bar.scss';

const Bar = ({children}) => {
    return (
        <div className={'bar'}>
            {children}
        </div>
    );
};

export default Bar;

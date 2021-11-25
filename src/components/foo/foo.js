import React from "react";

import './foo.scss';

const Foo = ({children}) => {
    return (
        <div className={'foo'}>
            {children}
        </div>
    );
};

export default Foo;

import React from 'react';

interface params {
    customColor: string;
};

export default function DividerLine({customColor}:params):React.ReactElement {

    return (
        <React.Fragment>
            <div style={{width: '75%', height: '5px', backgroundColor: customColor || 'white', marginTop: '20px', marginBottom: '20px'}}></div>
        </React.Fragment>
    );
};
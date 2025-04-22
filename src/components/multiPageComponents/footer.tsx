import React, {useState, useEffect} from 'react';

export default function Footer():React.ReactElement {

    const [boxHeight, setBoxHeight] = useState(39);

    useEffect(() => {

        //get the width of the footer
        const boxWidth = document.getElementById('footerWrapper') as HTMLDivElement;

        //the aspect ratio of the pencil image is 892:38
        setBoxHeight((boxWidth.clientWidth / 892) * 38);
    }, []);

    return (
        <React.Fragment>
            <div id="footerWrapper" style={{height: `${boxHeight}px`}}>
                <p style={{fontSize: '15px'}} className="alignLeft">
                    © 2023 Northgate High School Maths Department
                </p>
            </div>
        </React.Fragment>
    );
};
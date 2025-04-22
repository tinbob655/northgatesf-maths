import React from 'react';
import {Routes, Route} from 'react-router-dom';

//import all pages
import Home from './components/pages/home/home';

export default function AllRoutes():React.ReactElement {

    function getRoutes():[React.ReactElement] {
        let routesHTML:[React.ReactElement] = [<></>];

        //map of all pages
        const pages:any = {
            ['']: <Home />,
        };

        Object.keys(pages).forEach((page) => {
            routesHTML.push(
                <Route path={`/${page}`} element={pages[page]} />
            );
        });

        return routesHTML;
    };

    return (
        <div style={{marginTop: '120px'}}>
            <Routes>
                {getRoutes()}
            </Routes>
        </div>
    );
};
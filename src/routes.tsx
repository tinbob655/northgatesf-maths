import React from 'react';
import {Routes, Route} from 'react-router-dom';

//import all pages
import Home from './components/pages/home/home';
import PastPapers from './components/pages/pastPapers/pastPapers';
import CambridgeGo from './components/pages/cambridgeGo/cambridgeGo';
import Workshop from './components/pages/workshop/workshop';
import RevisionTimetables from './components/pages/revisionTimetables/revisionTimetables';
import PastPaperTable from './components/pages/pastPapers/pastPaperTable';

export default function AllRoutes():React.ReactElement {

    function getRoutes():[React.ReactElement] {
        let routesHTML:[React.ReactElement] = [<></>];

        //map of all pages
        const pages:any = {
            ['']: <Home />,
            pastPapers: <PastPapers />,
            cambridgeGo: <CambridgeGo />,
            workshop: <Workshop />,
            revisionTimetables: <RevisionTimetables />,
            pastPaperTable: <PastPaperTable />,
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
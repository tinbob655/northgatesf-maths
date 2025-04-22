import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../multiPageComponents/pageHeader';

interface singlePaperSet {
    date: string,
    papers:[{
        name: string,
        paperLink: string,
        markSchemeLink: string,
        screencastLink: string,
    }],
};

export default function PastPaperTable():React.ReactElement {

    const location = useLocation();

    const [specTitle, setSpecTitle] = useState<string>('');
    const [paperTableHTML, setPaperTableHTML] = useState<[React.ReactElement]>([<></>]);

    useEffect(() => {
        const specCode:string = location.state;

        if (!specCode) {
            throw new Error('No spec code provided to pastPaperTable');
        };

        //format the spec code into a readable course title
        let tempSpecTitle:string = '';
        tempSpecTitle += specCode.charAt(0) === 'S' ? 'Single' : 'Further';
        tempSpecTitle += ' Maths ';
        tempSpecTitle += specCode.substring(1, 3) === 'AS' ? 'AS Level' : 'A Level';
        setSpecTitle(tempSpecTitle);

        //generate the table HTML
        let tempTableHTML:[React.ReactElement] = [<></>];
        const paperData:[singlePaperSet] = require(`../../../assets/data/${specCode}.json`);
        paperData.forEach((paperSet) => {
            tempTableHTML.push(
                <React.Fragment>
                    {paperSet.date}
                </React.Fragment>
            );
        });

        setPaperTableHTML(tempTableHTML);
    }, []);

    return (
        <React.Fragment>
            <PageHeader heading={`${specTitle} Past Papers`} subheading="Past papers, mark schemes and screencasts" />

            {paperTableHTML}
        </React.Fragment>
    );
};
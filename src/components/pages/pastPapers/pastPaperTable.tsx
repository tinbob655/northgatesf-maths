import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../multiPageComponents/pageHeader';
import {getFirestore, getDoc, doc, Firestore, DocumentSnapshot} from 'firebase/firestore';
import './pastPaperStyles.scss';

interface pastPaperData {
    paperNames: string[];
    paperYears: string[];
    screencastURLs: string[];
};


export default function PastPaperTable():React.ReactElement {

    const location = useLocation();

    const [specTitle, setSpecTitle] = useState<string>('');
    const [paperTableHTML, setPaperTableHTML] = useState<[React.ReactElement]>([<></>]);
    const [paperTableHeadersHTML, setPaperTableHeadersHTML] = useState<React.ReactElement[]>();

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

        async function fetchPastPaperData():Promise<pastPaperData> {
            const firestore:Firestore = getFirestore();
            const specDoc:DocumentSnapshot = await getDoc(doc(firestore, 'pastPapers', `${specCode.substring(1, 3) === 'AS' ? 'as' : 'a'}${specCode.charAt(0) === 'S' ? 'Level' : 'Further'}`));

            return specDoc.data() as pastPaperData;
        };

        fetchPastPaperData().then((data:pastPaperData) => {

            //paper data has been fetched
            //get table headers
            getPaperTableHeaders(data.paperNames);

            //generate HTML for the main table
            getPaperTableHTML(data, getPaperTableRow, setPaperTableHTML);
        })
    }, []);

    function getPaperTableHeaders(paperNames:string[]):void {
        let tempPaperTableHeadersHTML:React.ReactElement[] = [
            <React.Fragment>
                <td>
                    <h2>
                        Year
                    </h2>
                </td>
            </React.Fragment>
        ];

        paperNames.forEach((header:string) => {
            tempPaperTableHeadersHTML.push(
                <React.Fragment>
                    <td>
                        <h2 className="paperTableHeader">
                            {header} Paper
                        </h2>
                    </td>
                    <td>
                        <h2 className="paperTableHeader">
                            {header} Screencast
                        </h2>
                    </td>
                    <td>
                        <h2 className="paperTableHeader">
                            {header} Mark Scheme
                        </h2>
                    </td>
                </React.Fragment>
            );
        });

        setPaperTableHeadersHTML(tempPaperTableHeadersHTML);
    };

    function getPaperTableRow(screencastURLs:string[], paperNames:string[]):React.ReactElement[] {
        let tempTableRowHTML:React.ReactElement[] = [];

        //past papers pdf cells
        screencastURLs.forEach((screencastURL:string) => {
            tempTableRowHTML.push(
                <td>
                    PAST_PAPER_PDF
                </td>
            );
        });

        //screencast cells
        screencastURLs.forEach((screencastURL:string) => {
            tempTableRowHTML.push(
                <td>
                    <a href={screencastURL} target="_blank">
                        <h3>
                            {paperNames[screencastURLs.indexOf(screencastURL)]} Screencast
                        </h3>
                    </a>
                </td>
            );
        });

        //mark scheme cells
        screencastURLs.forEach((screencastURL:string) => {
            tempTableRowHTML.push(
                <td>
                    MARK_SCHEME
                </td>
            );
        });

        return tempTableRowHTML;
    };

    function getPaperTableHTML(data: pastPaperData, getPaperTableRow: (screencastURLs: string[], paperNames: string[]) => React.ReactElement[], setPaperTableHTML: React.Dispatch<React.SetStateAction<[React.ReactElement<unknown, string | React.JSXElementConstructor<any>>]>>) {
        let tempTableHTML: [React.ReactElement] = [<></>];
    
        //work out the number of papers per table row
        const papersPerRow = data.screencastURLs.length / data.paperYears.length;
        if (data.screencastURLs.length % data.paperYears.length !== 0) {
            throw new Error('Invalid number of screencasts for the number of different papers');
        };
    
        //generate table html
        data.paperYears.forEach((paperYear: string) => {
            const index = data.paperYears.indexOf(paperYear);
    
            tempTableHTML.push(
                <React.Fragment>
                    <tr>
                        <td>
                            <h2 className="paperTableHeader">
                                {paperYear}
                            </h2>
                        </td>
                        {getPaperTableRow(data.screencastURLs.slice((index * papersPerRow), ((index + 1) * papersPerRow)), data.paperNames)}
                    </tr>
                </React.Fragment>
            );
        });
        setPaperTableHTML(tempTableHTML);
    };

    return (
        <React.Fragment>
            <PageHeader heading={`${specTitle} Past Papers`} subheading="Past papers, mark schemes and screencasts" />

            <table>
                <thead>
                    <tr>
                        {paperTableHeadersHTML}
                    </tr>
                    {paperTableHTML}
                </thead>
            </table>
        </React.Fragment>
    );
};

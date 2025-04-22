import React from 'react';
import PageHeader from '../../multiPageComponents/pageHeader';
import FancyButton from '../../multiPageComponents/fancyButton';

export default function Home():React.ReactElement {
    
    return (
        <React.Fragment>
            <PageHeader heading="Northgate Sixth Form Maths" subheading="Tips and tools to prepare for your exams" />
            <h2 className="alignLeft">
                Get ready for your exams:
            </h2>
            <p className="alignLeft">
                Please make use of our resources to get yourself in the best position possible coming up to your exams! Failure to prepare is preparation for failure!
            </p>

            <table>
                <thead>
                    <tr>
                        <td>
                            <FancyButton destination="/pastPapers" buttonText="Past Papers" />
                        </td>
                        <td>
                            <FancyButton destination="/workshop" buttonText="Maths Workshop" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FancyButton destination="/revisionTimetables" buttonText="Create a Revision Timetable" />
                        </td>
                        <td>
                            <FancyButton destination="/cambridgeGo" buttonText="Cambridge Go" />
                        </td>
                    </tr>
                </thead>
            </table>
        </React.Fragment>
    );
};
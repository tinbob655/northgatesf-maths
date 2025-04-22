import React from 'react';
import PageHeader from '../../multiPageComponents/pageHeader';
import FancyButton from '../../multiPageComponents/fancyButton';
import DividerLine from '../../multiPageComponents/dividerLine';

export default function Home():React.ReactElement {
    
    return (
        <React.Fragment>
            <PageHeader heading="Northgate Sixth Form Maths" subheading="Tips and tools to prepare for your exams" />

            {/*buttons to main features section*/}
            <div>
                <h2 className="alignLeft">
                    Get ready for your exams:
                </h2>
                <p className="alignLeft">
                    Please make use of our resources to get yourself in the best position possible coming up to your exams. To fail to prepare is to prepare to fail!
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
                            <td style={{paddingTop: '35px'}}>
                                <FancyButton destination="/revisionTimetables" buttonText="Create a Revision Timetable" />
                            </td>
                            <td style={{paddingTop: '35px'}}>
                                <FancyButton destination="/cambridgeGo" buttonText="Cambridge Go" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            <DividerLine />

            {/*how to revise section*/}
            <div>
                <h2 className="alignRight">
                    How to revise?
                </h2>
                <p className="alignRight">
                    We recommend using past papers as the most efficient way to revise. Complete them without looking at the mark scheme, then use the mark scheme to correct any wrong answers. For any questions you cannot do, there will be a screencast available. It is advised that you watch the screencast until you know how to process with the question, then pause the screencast and try again. If you are still stuck, please ask your teacher for help.
                </p>
            </div>
        </React.Fragment>
    );
};
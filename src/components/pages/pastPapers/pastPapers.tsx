import React from 'react';
import PageHeader from '../../multiPageComponents/pageHeader';
import FancyButton from '../../multiPageComponents/fancyButton';

export default function PastPapers():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader heading="Past Papers" subheading="An up-to-date archive of all OCR A-level Mathematics Past Papers" />

            <h2>
                Please select your course:
            </h2>

            <table>
                <thead>
                    <tr>
                        <td>
                            <FancyButton buttonText="Single Maths AS Level" destination="/pastPaperTable" state={'SAS'} />
                        </td>
                        <td>
                            <FancyButton buttonText="Single Maths A Level" destination="/pastPaperTable" state={'SA'} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingTop: '35px'}}>
                            <FancyButton buttonText="Further Maths AS Level" destination="/pastPaperTable" state={'FAS'} />
                        </td>
                        <td style={{paddingTop: '35px'}}>
                            <FancyButton buttonText="Further Maths A Level" destination="/pastPaperTable" state={'FA'} />
                        </td>
                    </tr>
                </thead>
            </table>
        </React.Fragment>
    );
};
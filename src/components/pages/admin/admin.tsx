import React, {useState} from 'react';
import PageHeader from '../../multiPageComponents/pageHeader';
import {hash} from '../../../functions/hasher';
import DividerLine from '../../multiPageComponents/dividerLine';

export default function Admin():React.ReactElement {

    const [granted, setGranted] = useState<boolean>(false);

    return (
        <React.Fragment>
            <PageHeader heading="Admin" subheading="" />

            {granted ? (
                <React.Fragment>

                    {/*user is allowed to access the admin page*/}
                    <h3>
                        Access granted!
                    </h3>
                    <p>
                        On this page, you can: upload new screencasts, papers and mark schemes and add future workshop dates
                    </p>

                    <DividerLine />

                    <form id="newPaperForm" onSubmit={(event) => {paperFormSubmitted(event)}} style={{marginBottom: '100px'}}>
                        <h2>
                            Upload papers and mark schemes:
                        </h2>
                        <p>
                            Year:
                        </p>
                        <input name="date" type="number" placeholder="Enter paper year..." required />

                        <DividerLine />

                        <p>
                            Select course:
                        </p>
                        <div style={{textAlign: 'center'}}>
                            <input type="radio" className="radio" name="course" id="SAS" value="AS Single Maths" required />
                            <label htmlFor="SAS">AS Single Maths</label><br/>
                            <input type="radio" className="radio" name="course" id="SA" value="A Level Single Maths" required />
                            <label htmlFor="SA">A Level Single Maths</label><br/>
                            <input type="radio" className="radio" name="course" id="FAS" value="AS Further Maths" required />
                            <label htmlFor="FAS">AS Further Maths</label><br/>
                            <input type="radio" className="radio" name="course" id="FA" value="A Level Further Maths" required />
                            <label htmlFor="FA">A Level Further Maths</label><br/>
                        </div>

                        <DividerLine />

                        <p>
                            Paper PDFs:
                        </p>
                        <p style={{fontSize: '15px'}}>
                            Only use the boxes in order from top to bottom with no gaps. Leave unneeded boxes empty.
                        </p>

                        <p style={{fontSize: '15px'}}>
                            Paper #1:
                        </p>
                        <input type="file" name="paper1" accept=".pdf" required />

                        <p style={{fontSize: '15px'}}>
                            Paper #2:
                        </p>
                        <input type="file" name="paper2" accept=".pdf" required />

                        <p style={{fontSize: '15px'}}>
                            Paper #3:
                        </p>
                        <input type="file" name="paper3" accept=".pdf" />

                        <p style={{fontSize: '15px'}}>
                            Paper #4:
                        </p>
                        <input type="file" name="paper4" accept=".pdf" />

                        <DividerLine />

                        <p>
                            Paper mark schemes:
                        </p>

                        <p style={{fontSize: '15px'}}>
                            Paper #1 Mark Scheme:
                        </p>
                        <input type="file" name="paper1MarkScheme" accept=".pdf" required />

                        <p style={{fontSize: '15px'}}>
                            Paper #2 Mark Scheme:
                        </p>
                        <input type="file" name="paper2MarkScheme" accept=".pdf" required />

                        <p style={{fontSize: '15px'}}>
                            Paper #3 Mark Scheme:
                        </p>
                        <input type="file" name="paper3MarkScheme" accept=".pdf" required />

                        <p style={{fontSize: '15px'}}>
                            Paper #4 Mark Scheme:
                        </p>
                        <input type="file" name="paper4MarkScheme" accept=".pdf" required /><br/>

                        <input type="submit" className="submit" value="CLICK TO UPLOAD PAPERS" />
                    </form>

                    <DividerLine />

                    <h2>
                        Upload future workshop dates:
                    </h2>
                    <form id="workshopDatesForm" onSubmit={(event) => {workshopDatesFormSubmitted(event)}} style={{marginBottom: '100px'}}>
                        <input type="date" name="date1" required />
                        <button onClick={(event) => {addNewDate(event)}} style={{margin: 'auto', display: 'block'}}>
                            <h3>
                                ➕
                            </h3>
                        </button>
                        <input type="submit" className="submit" value="CLICK TO UPLOAD DATES" />
                    </form>

                    <DividerLine />

                    <h2>
                        Upload Screencasts:
                    </h2>
                    <form id="screencastForm" onSubmit={(event) => {screencastFormSubmitted(event)}} style={{marginBottom: '100px'}}>
                        <p>
                            Year:
                        </p>
                        <input name="year" type="text" placeholder="Enter screencast's respective year..." required style={{width: '300px'}} />

                        <p>
                            Select Course:
                        </p>
                        <div style={{textAlign: 'center'}}>
                            <input type="radio" className="radio" name="course" id="SAS" value="AS Single Maths" required />
                            <label htmlFor="SAS">AS Single Maths</label><br/>
                            <input type="radio" className="radio" name="course" id="SA" value="A Level Single Maths" required />
                            <label htmlFor="SA">A Level Single Maths</label><br/>
                            <input type="radio" className="radio" name="course" id="FAS" value="AS Further Maths" required />
                            <label htmlFor="FAS">AS Further Maths</label><br/>
                            <input type="radio" className="radio" name="course" id="FA" value="A Level Further Maths" required />
                            <label htmlFor="FA">A Level Further Maths</label><br/>
                        </div>

                        <p>
                            Paper No:
                        </p>
                        <input type="number" name="paperNo" placeholder="Enter screencast's paper number..." required style={{width: '300px'}} />

                        <p>
                            Screencast URL:
                        </p>
                        <input type="url" name="screencastURL" placeholder="Enter screencast URL..." required style={{width: '300px'}} />

                        <input type="submit" className="submit" value="CLICK TO UPLOAD SCREENCAST" style={{marginTop: '20px'}} />
                    </form>

                    <DividerLine />

                </React.Fragment>
            ) : (
                <React.Fragment>

                    {/*user is not allowed to access the admin page*/}
                    <h2 style={{color: 'red', height: 0, overflowY: 'hidden'}} id="errorMessage">
                        Incorrect password. Please try again.
                    </h2>

                    <form id="adminPasswordForm" onSubmit={(event) => {passwordFormSubmitted(event)}}>
                        <p>
                            Enter admin password:
                        </p>
                        <input name="password" type="password" placeholder="Enter admin password..." required style={{width: '50%', height: '35px', borderRadius: '10px'}} />
                        <input name="submit" type="submit" className="submit" value="Log in" />
                    </form>
                </React.Fragment>
            )}
        </React.Fragment>
    );

    function passwordFormSubmitted(event:any):void {
        event.preventDefault();

        const userPasswordHash:number = hash(event.target.password.value);
        const actualHash:number = Number(import.meta.env.VITE_ADMIN_PAGE_PASSWORD_HASH);

        if (userPasswordHash == actualHash) {
            setGranted(true);
        }
        else {
            document.getElementById('errorMessage')!.style.height = 'auto';
        };
    };

    function paperFormSubmitted(event:any):void {
        event.preventDefault();
    };

    function workshopDatesFormSubmitted(event:any):void {
        event.preventDefault();
    };

    function addNewDate(event:any):void {
        event.preventDefault();
    };

    function screencastFormSubmitted(event:any):void {
        event.preventDefault();
    };
};
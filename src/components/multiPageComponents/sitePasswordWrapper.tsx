import React, {useState, useEffect} from 'react';
import {hash} from '../../functions/hasher.ts';

interface props {
    children: React.ReactNode;
};
export default function SitePasswordWrapper({children}:props):React.ReactElement {

    function checkLoggedIn(event:any):void {
        event.preventDefault();

        const userPassword:string = event.currentTarget.password.value;
        const correctPasswordBool = hash(userPassword) == passwordWhenHashed ? true : false;

        //save the login state
        setLoggedIn(correctPasswordBool);
    };

    const [formStyles, setFormStyles] = useState({});
    const [loggedIn, setLoggedIn] = useState<boolean>(Boolean(sessionStorage.getItem('loggedIn')));
    const passwordWhenHashed:number = Number(import.meta.env.VITE_SITE_PASSWORD_HASH);

    //work out the margins for the form if it is shown (to make it vertically aligned center)
    useEffect(() => {

        //save the login state to session storage
        sessionStorage.setItem('loggedIn', String(loggedIn));

        if (!loggedIn) {

            const form = document.getElementById('sitePasswordForm');
            if (!form) throw new Error('form not found');

            const heightOfForm = form.offsetHeight
            const windowHeight = window.innerHeight;
    
            //calculate the distance from the top and bottom of the screen the form should be to be centred
            const marginTopBottom = (windowHeight - heightOfForm) / 2;
            setFormStyles( {
                marginTop: String(marginTopBottom) + 'px',
            });
        };

    }, [loggedIn]);

    return (
        <React.Fragment key={String(loggedIn)}>
            {loggedIn ? (
                <React.Fragment>

                    {/*user has entered the password, show them the website */}
                    {children}
                </React.Fragment>
            ) : (
                <React.Fragment>

                    {/*user has not entered the password, show the the password form */}
                    <form onSubmit={(event) => {checkLoggedIn(event)}} style={formStyles} id="sitePasswordForm">
                        <h1>
                            Guest area
                        </h1>
                        <p>
                            Please enter the password below:
                        </p>
                        <input name="password" type="password" placeholder="Enter password..." required maxLength={20} style={{width: '200px', height: '30px'}} />
                        <input name="submit" type="submit" className="submit" value="Go" />
                    </form>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};
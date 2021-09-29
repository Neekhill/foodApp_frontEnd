import React, { useState } from 'react';
import SignUpForm from '../forms/SignUpForm';
import { signUpApi } from '../api/authApi';

function SignUpComponent() {

    const AvailableStates = {
        NEW: 'NEW',
        LOADING: 'LOADING',
        ERROR: 'ERROR',
        SUCCESS: 'SUCCESS'
    };

    const [signUpComponentState, setsignUpComponentState] = useState(AvailableStates.NEW);

    const signUp = ({ fname, lname, email, age, password }) => {

        console.log(` FirstName = ${fname} and LastName = ${lname} and Email = ${email} and age = ${age} and password = ${password}`);

        setsignUpComponentState(AvailableStates.LOADING);

        signUpApi(fname, lname, email, age, password)
            .then(response => {
                console.log(JSON.stringify(response));
                if (response.status === 200) {
                    setsignUpComponentState(AvailableStates.SUCCESS);
                }
                else {

                    setsignUpComponentState(AvailableStates.ERROR);
                }
            })
            .catch((error) => {
                console.log(error);
                setsignUpComponentState(AvailableStates.ERROR);
            })

    }

    return (
        <>
            {
                signUpComponentState === AvailableStates.NEW &&
                (
                    <SignUpForm signUp={signUp} />
                )
            }
            {
                signUpComponentState === AvailableStates.LOADING && (
                    <div> Spinner </div>
                )
            }
            {
                signUpComponentState === AvailableStates.ERROR && (
                    <div> Error occurred </div>
                )
            }
            {
                signUpComponentState === AvailableStates.SUCCESS && (
                    <div> Account created successfull! </div>
                )
            }
        </>
    )
}

export default SignUpComponent

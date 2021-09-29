import React from 'react'
import LogInForm from '../forms/LoginForm';
import { logInApi } from '../api/authApi';

function LogInComponent() {
    const AvailableStates = {
        NEW: 'NEW',
        LOADING: 'LOADING',
        ERROR: 'ERROR',
        SUCCESS: 'SUCCESS'
    };

    const [logInComponentState, setlogInComponentState] = useState(AvailableStates.NEW)
    const logIn = ({ email, password }) => {
        console.log(`Email = ${email} and  and password = ${password}`);

        setlogInComponentState(AvailableStates.LOADING);

        logInApi(email, password)
            .then(response => {
                console.log(JSON.stringify(response));
                if (response.status === 200) {
                    logInComponentState(AvailableStates.SUCCESS);
                }
                else {

                    logInComponentState(AvailableStates.ERROR);
                }
            })
            .catch((error) => {
                console.log(error);
                logInComponentState(AvailableStates.ERROR);
            })
    }

    return (
        <>
            {
                logInComponentState === AvailableStates.NEW &&
                (
                    <LogInForm logIn={logIn} />
                )
            }
            {
                logInComponentState === AvailableStates.LOADING && (
                    <div> Spinner </div>
                )
            }
            {
                logInComponentState === AvailableStates.ERROR && (
                    <div> Error occurred </div>
                )
            }
            {
                logInComponentState === AvailableStates.SUCCESS && (
                    <div> Logged In successfull! </div>
                )
            }
        </>
    )
}

export default LogInComponent

import React from 'react';
import form_reg from '../assets/form_reg'
import FormInputComponent from '../components/FormInputComponent';
const LogInForm = ({ logIn }) => {
    const [loginFormState, setloginFormState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginFormState({
            ...loginFormstate,
            [name]: value
        })

    }
    return (
        <>

            <div className=" flex container mx-auto my-16 justify-center font-sans ">
                <div className=" sm:flex rounded-lg overflow-hidden shadow">
                    {/* image */}
                    <div className="max-w-lg sm:w-1/2 sm:max-w-xl ">
                        <img src={form_reg} className="object-cover h-40 w-full sm:h-96 sm:w-full " />
                    </div>
                    {/* login form */}
                    <div className="max-w-2xl sm:w-1/2 sm:max-w-xl">
                        <form className="bg-gray-100 p-4 sm:px-10 sm:py-16 h-full ">
                            <div>
                                <FormInputComponent labelName="Email" inputType="email" inputPlaceHolder="Enter your email"
                                    name="email"
                                    value={loginFormstate.email}
                                    run={handleChange} />
                            </div>
                            <div>
                                <FormInputComponent labelName="Password" inputType="password" inputPlaceHolder="Enter your password"
                                    name="password"
                                    value={loginFormstate.password}
                                    run={handleChange} />
                            </div>
                            <div className="mt-8">
                                <button className="px-5 py-2 rounded-lg bg-pink-500 text-white font-semibold text-center w-full"
                                    onClick={() => { logIn(loginFormstate) }}>Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogInForm;
/*
mt-20 w-2/3 p-32 bg-gray-200 text-6xl text-center */
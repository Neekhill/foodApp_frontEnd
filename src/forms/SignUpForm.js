import React, { useState } from 'react'
import FormInputComponent from '../components/FormInputComponent'

function SignUpForm({ signUp }) {

    const [singUpFormUserState, setSignUpFormSUsertate] = useState({
        fname: "",
        lname: "",
        email: "",
        age: "",
        password: "",
        conPassword: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setSignUpFormSUsertate({
            ...singUpFormUserState,
            [name]: value
        })
    }
    return (
        <>
            <div className="flex container my-1 justify-center font-sans justify-items-center ">
                {/* form */}
                <form className="bg-gray-100 p-4 sm:px-10 sm:py-6 h-full  w-full sm:max-w-xl ">
                    <div className="mb-3">
                        <FormInputComponent labelName="First Name" inputType="text" inputPlaceHolder="Enter your First Name"
                            name="fname"
                            value={singUpFormUserState.fname}
                            run={handleChange} />
                    </div>
                    <div className="mb-3">
                        <FormInputComponent labelName="Last Name" inputType="text" inputPlaceHolder="Enter your Last Name"
                            name="lname"
                            value={singUpFormUserState.lname}
                            run={handleChange} />
                    </div>
                    <div className="mb-3">
                        <FormInputComponent labelName="Email" inputType="Email" inputPlaceHolder="Enter your Email"
                            name="email"
                            value={singUpFormUserState.email}
                            run={handleChange} />
                    </div>
                    <div className="mb-3">
                        <FormInputComponent labelName="Age" inputType="text" inputPlaceHolder="Enter your Age"
                            name="age"
                            value={singUpFormUserState.age}
                            run={handleChange} />
                    </div>
                    <div className="mb-3">
                        <FormInputComponent labelName="Password" inputType="password" inputPlaceHolder="Please enter your password"
                            name="password"
                            value={singUpFormUserState.password}
                            run={handleChange} />
                    </div>
                    <div className="mb-3">
                        <FormInputComponent labelName="Confirm Password" name="confirmPassword" inputType="Password" inputPlaceHolder="Re-enter your password"
                            name="conPassword"
                            value={singUpFormUserState.conPassword}
                            run={handleChange} />
                    </div>
                    <div className="mt-6">
                        <button className="px-5 py-2 rounded-lg bg-pink-500 text-white font-semibold text-center w-full"
                            onClick={() => signUp(singUpFormUserState)}>
                            Sign Up
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default SignUpForm

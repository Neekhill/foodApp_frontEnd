import React from "react";

function FormInputComponent({ labelName, name, value, run, inputType, inputPlaceHolder }) {
    return (
        <div>
            <label className="text-md  text-gray-700 font-medium  mb-2" >{labelName}</label>
            <input type={inputType}
                placeholder={inputPlaceHolder}
                className="block text-md text-white bg-gray-700 px-4 py-3 rounded-lg w-full focus:outline-none "
                name={name}
                value={value}
                onChange={(e) => { run(e); }} >

            </input>
        </div>
    )
}

export default FormInputComponent

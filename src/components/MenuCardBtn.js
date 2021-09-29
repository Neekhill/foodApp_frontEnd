import React from 'react'

function MenuCardBtn(props) {
    return (<>
        <div>
            <button onClick={(e) => props.run(e)} value={props.value} className={props.color + " rounded-full text-lg font-extrabold p-3 focus:outline-none"} >{props.value}</button>
        </div>
    </>
    );
}

export default MenuCardBtn

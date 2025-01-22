
import { useState } from "react";
import '../App.css'
const Avathar = ({ imgPath, styleClass }) => {

    return (
        <>
            <div className={styleClass}>
                <img src={imgPath} alt="user avathar" />
            </div>
        </>
    );
}

export default Avathar;
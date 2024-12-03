import "./placeholder.module.css"
import React from "react";

const Input: React.FC<{placeholder:string}> = ({placeholder}) => {
    return (
        <>
            <div>
                <img className="placeholder" src="/public/assets/svgs/placeholder.svg" alt="search" />
                <input className="searchbar" placeholder={placeholder}/>
            </div>

        </>
    )
}

export default Input;
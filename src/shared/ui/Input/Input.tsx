import "./input.module.scss"
import React, {InputHTMLAttributes} from "react";
import SearchIcon from "../../../../public/assets/svgs/search.svg"
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({placeholder, ...props}) => {
    return (
        <>
            <label className={styles.label} htmlFor="search">
                <img className="placeholder" src={SearchIcon} alt="search" />
                <input className={styles.searchbar} id="search" name="search" placeholder={placeholder} {...props}/>
            </label>
        </>
    )
}

export default Input;
import React, { CSSProperties, ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
    label?: string;
    onClick: () => void;
    disabled?: boolean;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
    label,
    style,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className ? className : ""} ${styles.btn}`}
            style={style}
        >
            {label}
            {children}
        </button>
    );
};

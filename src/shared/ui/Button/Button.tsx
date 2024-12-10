import React, { MutableRefObject, ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean | MutableRefObject<boolean>;
    children: ReactNode;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className} ${styles.btn}`}
        >
            {children}
        </button>
    );
};

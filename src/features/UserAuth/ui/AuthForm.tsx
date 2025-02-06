import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { registerUser } from "../model/authService.ts";
import styles from "./authForm.module.scss";

const AuthForm: React.FC = () => {
    interface FormValues {
        username: string;
        email: string;
        password: string;
    }

    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { error },
    } = useForm<FormValues>();
    const onSubmit = async (data: FormValues) => {
        console.log("Data being sent:", data);
        const passwordConfirmation = passwordConfirmationRef.current?.value;
        /* eslint-disable no-empty */
        if (data.password !== passwordConfirmation) {
        } else {
            /* eslint-enable no-empty */
            try {
                await registerUser(data);
            } catch (error) {
                console.error("Error during registration:", error);
                alert(
                    error.response?.data?.error?.message ||
                        "Registration failed",
                );
            }
        }
    };

    const emailValidation = {
        required: {
            value: true,
            message: "Email is required",
        },
    };

    const usernameValidation = {
        required: {
            value: true,
            message: "Username is required",
        },
    };

    const passwordValidation = {
        required: {
            value: true,
            message: "password is required",
        },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const passwordConfirmationValidation = {
        required: {
            value: true,
            message: "Password confirmation is required",
        },
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    {...register("email", emailValidation)}
                />
            </div>
            <div className={styles.container}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    placeholder="example@mail.com"
                    {...register("username", usernameValidation)}
                />
            </div>
            <div className={styles.container}>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="***"
                    {...register("password", passwordValidation)}
                />
            </div>
            <div className={styles.container}>
                <label htmlFor="password_confirmation">
                    Password confirmation:
                </label>
                <input
                    id="password_confirmation"
                    type="text"
                    placeholder="***"
                    ref={passwordConfirmationRef}
                />
            </div>
            <Button
                className={styles.container}
                label="Submit"
                onClick={handleSubmit(onSubmit)}
            />
        </form>
    );
};

export default AuthForm;

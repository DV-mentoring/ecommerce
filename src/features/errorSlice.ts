import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormErrors {
    passwordMismatch: boolean;
    emailInvalid: boolean;
    requiredFields: boolean;
}

const initialState: FormErrors = {
    passwordMismatch: false,
    emailInvalid: false,
    requiredFields: false,
};

export const errorSlice = createSlice({
    name: "formErrors",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<Partial<FormErrors>>) => {
            return { ...state, ...action.payload };
        },
        clearErrors: () => initialState,
    },
});

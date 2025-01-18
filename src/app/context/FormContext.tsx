"use client"

import React, { createContext, useState, ReactNode, useContext } from 'react';

interface FormData {
    email: string;
    fullname: string;
    github: string;
    avatar: File | null;
}

interface FormContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        fullname: '',
        github: '',
        avatar: null,
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};

export { FormProvider, useFormContext, FormContext };
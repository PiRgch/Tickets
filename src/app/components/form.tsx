"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { FormContext } from "../context/FormContext";
import Image from "next/image";

const Form = () => {
    const formContext = useContext(FormContext);
    if (!formContext) {
        throw new Error("FormContext must be used within a FormProvider");
    }
    const { formData, setFormData } = formContext;
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/ticket");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value, files } = e.target;

        if (name === "avatar" && files) {
            setFormData((prevData) => ({
                ...prevData,
                avatar: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <form className="flex flex-col min-w-[33%] p-6" onSubmit={handleSubmit}>
                <label htmlFor="avatar" className="p-1">
                    Avatar
                </label>
                <input required={true} type="file" name="avatar" id="avatar" accept="image/*" className="hidden" onChange={handleChange} />
                <label
                    htmlFor="avatar"
                    aria-placeholder="Upload your avatar"
                    className="flex flex-col justify-center items-center p-2 mb-4 border border-gray-300 bg-white bg-opacity-15 rounded-md cursor-pointer hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-[#8784a4]"
                >
                    {formData.avatar ? (
                        <Image
                            src={URL.createObjectURL(formData.avatar)}
                            alt="file"
                            width={30}
                            height={30}
                        />
                    ) : (
                        <Image src="/images/icon-upload.svg" width={30} height={30} alt="file" />
                    )}
                    <p className="text-white text-opacity-50">Drag and drop or click to upload</p>
                </label>

                <label htmlFor="email" className="p-1">
                    Email
                </label>
                <input
                    required={true}
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border bg-white bg-opacity-15 rounded-sm"
                />

                <label htmlFor="fullname" className="p-1">
                    Full Name
                </label>
                <input
                    required={true}
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="p-2 border bg-white bg-opacity-15 rounded-sm"
                />

                <label htmlFor="github" className="p-1">
                    Github
                </label>
                <input
                    required={true}
                    type="text"
                    name="github"
                    placeholder="@yourusername"
                    value={formData.github}
                    onChange={handleChange}
                    className="p-2 border bg-white bg-opacity-15 rounded-sm"
                />

                <button type="submit" className="mt-4 p-2 bg-[#e16151] text-black rounded-md">
                    Generate my ticket
                </button>
            </form>
        </div>
    );
};

export default Form;

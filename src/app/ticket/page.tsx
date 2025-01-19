"use client";

import React from "react";
import Image from "next/image";
import { useFormContext } from "../context/FormContext";
import TicketSVG from "../components/ticket";
import Link from "next/link";

const Ticket = () => {
    const { formData } = useFormContext();

    return (
        <div className="flex flex-col min-h-screen items-center">
            <Link href="/" className="mt-5 flex w-screen justify-center items-center text-center text-[2rem]">
                <Image src="/images/logo-mark.svg" className="m-2" width={30} height={30} alt="file" />
                Ticket
            </Link>
            {formData.fullname && formData.avatar && formData.github && (
                <div className="relative top-10">
                    <h1 className="text-center text-[3rem] font-bold">
                        Congrats,{" "}
                        <span className="bg-gradient-to-r from-[#f37362] to-[#ffffff] inline-block text-transparent bg-clip-text">
                            {formData.fullname}
                        </span>
                        ! <br />
                        Your ticket is ready.
                    </h1>
                </div>
            )}

            {!formData.avatar && !formData.fullname && !formData.github ? (
                <div className="flex flex-1 flex-col items-center justify-center w-full">
                    <p className="text-center text-[1.5rem] text-[#8784a4]">Please fill the form to get your ticket.</p>
                    <button
                        className="bg-gradient-to-r from-[#f37362] to-[#f1968a] text-black p-2 mt-2 rounded-md "
                        onClick={() => (window.location.href = "/")}
                    >
                        Back to form
                    </button>
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center w-full">
                    <TicketSVG
                        fullname={formData.fullname}
                        github={formData.github}
                        avatar={formData.avatar ?? undefined}
                    ></TicketSVG>
                </div>
            )}
        </div>
    );
};

export default Ticket;

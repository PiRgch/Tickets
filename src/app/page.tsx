import Image from "next/image";
import Form from "./components/form";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="mt-5 flex w-screen justify-center items-center text-center text-[2rem]">
                <Image src="/images/logo-mark.svg" className="m-2" width={30} height={30} alt="file" />
                Tickets
            </div>
                <h1 className="text-center text-[3rem] font-bold relative top-10">
                    Welcome, register yourself to get your ticket!
                </h1>
            <div className="flex flex-1 items-center flex-col w-full justify-center h-full">
                <Form />
            </div>
        </div>
    );
}

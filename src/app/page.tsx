import Image from "next/image";
import Form from "./components/form";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="mt-5 flex w-screen justify-center items-center text-center text-[2rem]">
                <Image src="/images/logo-mark.svg" className="m-2" width={30} height={30} alt="file" />
                Tickets
            </div>
            <div className="justify-center h-full">
                <h1 className="text-center text-[3rem] font-bold">
                    Welcome, register yourself to get your ticket!
                </h1>
                <Form />
            </div>
        </div>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import { FormProvider } from "./context/FormContext";

export const metadata: Metadata = {
    title: "Tickets",
    description: "Challenge github",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <FormProvider>
                    {children}
                </FormProvider>
            </body>
        </html>
    );
}
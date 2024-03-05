import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Moki Reader",
    description: "A app read manga safe, no ads and free.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                <div className="mt-[70px]">{children}</div>
            </body>
        </html>
    );
}

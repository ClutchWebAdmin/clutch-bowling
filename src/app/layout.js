import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clutch Bowling",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col mx-auto relative ${inter.className}`}
      >
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}

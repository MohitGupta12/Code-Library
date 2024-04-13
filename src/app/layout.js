"use client";
// import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import "./globals.css";
import axios from "axios";
import { useEffect } from "react";
import { UserContextProvider } from "@/components/userContext";
import { Toaster } from "react-hot-toast";
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //  className={inter.className}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                color: "green",
              },
            },
            error: {
              style: {
                color: "red",
              },
            },
          }}
        />
        <UserContextProvider>
          {" "}
          <Navbar />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}

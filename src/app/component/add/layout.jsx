import React from 'react'
import {Navbar, Footer} from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //  className={inter.className}
      >
        <Navbar  />
        {children}
        </body>
    </html>
  );
}



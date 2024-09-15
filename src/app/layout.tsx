import React from "react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/layout/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "(주)엔포유 기술 지주",
  description: "Generated by create next app, dnslfkrh",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <div className="left"></div>
          <div className="center">
            <ClientWrapper>{children}</ClientWrapper>
          </div>
          <div className="right"></div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
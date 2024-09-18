import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./DashboardWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyncSphere - Where Collaboration Meets Efficiency",
  description:
    "This enterprise-level project management web application is designed to streamline your workflow and enhance productivity. It offers a comprehensive suite of features to manage tasks, projects, and priorities efficiently.",
  icons: [
    {
      url: "https://img.icons8.com/?size=96&id=6R735OAB4eCV&format=png",
      href: "https://img.icons8.com/?size=96&id=6R735OAB4eCV&format=png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}

import "./globals.css";
import VariableProvider from "../components/variable-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Converter",
  description: "An app to convert AR$ to crypto and currencies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VariableProvider>{children}</VariableProvider>
      </body>
    </html>
  );
}

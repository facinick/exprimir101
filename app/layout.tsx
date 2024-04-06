import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Exprimir101",
  description:
    "Exprimir101 is a one stop center for Specialised Physiotherapy and Fitness Programmes.",
  metadataBase: new URL("https://exprimir101.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-sc  reen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
        <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          {children}
          </div>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

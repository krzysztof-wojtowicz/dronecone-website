import "./globals.css";
import Script from "next/script";
import { Kanit } from "next/font/google";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={kanit.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WZ8MMVXML7"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WZ8MMVXML7');`}
      </Script>
    </html>
  );
}

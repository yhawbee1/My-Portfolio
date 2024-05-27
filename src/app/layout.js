import { Poppins, Epilogue } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-epilogue",
});

export const metadata = {
  title: "Brian Antwi's Portfolio",
  description: "This my portfolio to showcase some of my work",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${epilogue.variable}`}>
        {children}
      </body>
    </html>
  );
}

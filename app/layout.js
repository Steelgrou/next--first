import { Inter } from "next/font/google";
import "@/app/ui/globals.css";

const inter = Inter({subsets: ["latin"],});

export const metadata = {
  title: "Steel Dashboard",
  description: "Next.js Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>{children}</body>
    </html>
  );
}

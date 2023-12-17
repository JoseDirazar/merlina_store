import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/providers/theme-context";
import ThemeSwitch from "@/components/ui/theme-switch";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Merlina Tienda Magica desde 2019",
  description: "Mas de 50 años brindando nuestros productos en Olavarría",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-purple-300/30 dark:bg-black`}>
        <ThemeContextProvider>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <ThemeSwitch />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes';

import { Header } from "@/components/Header";
import { AuthProvider } from "@/providers/auth";
import { ModalProvider } from "@/providers/modal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dev Controle - Seu sistema de gerencimaneto.',
  description: 'Gerencie seus clientes e atendimentos de forma fácil!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <AuthProvider>
            <ModalProvider>
              <Header />
              {children}
            </ModalProvider>
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}

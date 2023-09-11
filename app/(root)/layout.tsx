import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import TopBar from '@/components/shared/TopBar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import BottomBar from '@/components/shared/BottomBar';
import '../globals.css';

export const metadata = {
  title: 'Threads',
  description: 'A Threads App clone made with Next.js 13',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <TopBar />

          <main className="flex">
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <RightSidebar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}

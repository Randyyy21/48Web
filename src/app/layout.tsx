"use client";

import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ParallaxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  );
}
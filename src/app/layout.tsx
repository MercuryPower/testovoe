'use client'


import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import React from "react";
import { Inter } from 'next/font/google'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const inter = Inter({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const client = new ApolloClient({
    uri:'https://api.escuelajs.co/graphql',
    cache: new InMemoryCache(),
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
      <ApolloProvider client={client}>
          {children}
      </ApolloProvider>
      </body>
    </html>
  );
}

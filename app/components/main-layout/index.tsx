"use client";
import Link from 'next/link';
import Navbar from "../navbar";
import Footer from "../footer";
import { Button, Flex } from '@mantine/core';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className='p-5'>
                {children}
            </div>
            <Footer />
        </div>
    );
}
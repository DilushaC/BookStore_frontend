"use client";
import Link from 'next/link';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ItemGrid from "./components/item-list";
import { Button } from '@mantine/core';

export default function Demo() {
  return (
    <div>
      <Navbar />
      <Button component={Link} href="/hello">
        Next link button
      </Button>
      <ItemGrid/>
      <Footer/>
    </div>

  );
}
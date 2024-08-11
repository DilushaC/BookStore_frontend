"use client";
import Link from 'next/link';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ItemGrid from "./components/item-list";
import FilterSection from "./components/filter-section";
import { Button, Flex } from '@mantine/core';

export default function Demo() {
  return (
    <div>
      <Navbar />
      <div className='p-5'>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
        >
          <div>
            <FilterSection />
          </div>
          <div>
            <ItemGrid />
          </div>
        </Flex>
      </div>

      <Footer />
    </div>

  );
}
'use client'; // Mark this as a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/terminal');
  }, [router]);

  return null; // No need to render anything
};

export default Page;
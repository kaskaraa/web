"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/app/lib/auth';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  const allowedEmails = ['nathanaruna07@gmail.com'];

  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();

      if (!user || !allowedEmails.includes(user.email || '')) {
        router.push('/unauthorized'); 
      } else {
        setIsAuthorized(true); 
      }

      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthorized ? (
        <a href='internal-tools-panel/create-post'>✅ Welcome to the Admin Panel</a>
      ) : (
        <div>❌ You are not authorized</div>
      )}
    </div>
  );
}

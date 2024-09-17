'use client'
// import LoginForm from "@/components/LoginForm";

import React, {useEffect} from "react";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter()

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            return router.replace('/home')
        }
        else {
            return router.replace('/login')
        }
    }, [router]);
    
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <>
      </>
    // </div>
  );
}

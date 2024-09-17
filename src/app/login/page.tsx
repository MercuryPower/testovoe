'use client'
import React, {useEffect} from 'react';
import LoginForm from "@/components/LoginForm";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        if (access_token !== null) {
            return router.replace('/home')
        }
        else{
            return router.replace('/login')
        }
    }, [router]);
    return (
        <div className={'flex min-h-screen  items-center justify-center'}>
            <LoginForm />
        </div>
    );
};

export default Page;
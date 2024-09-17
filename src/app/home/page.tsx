'use client'
import React, {useEffect, useState} from 'react';
import UserStatistic from "@/components/main/UserStatistic";
import UserHeader from "@/components/main/UserHeader";
import UserInformation from "@/components/main/UserInformation";
import Navbar from "@/components/header/Navbar";
import axios, {AxiosError} from "axios";
import {useRouter} from "next/navigation";
const getUserProfile = async (access_token:string) =>{
    const profileQuery = `
    query getUser{
        myProfile{
            name
            avatar
        }
}
  `;
    try {
        const response = await axios.post(
            'https://api.escuelajs.co/graphql',
            { query: profileQuery },
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        const { data } = response;
        if (data.errors) {
            console.error('Ошибка при получении профиля:', data.errors);
            return { error: 'Ошибка при получении профиля' };
        }

        const { name, avatar } = data.data.myProfile;

        return { success: true, name, avatar };
    } catch (error) {
        console.error('Ошибка:', error);
        return { error: 'Произошла ошибка при запросе профиля' };
    }
}
const setNewToken = async (refreshToken: string) => {
    try {
        const response = await axios.post('https://api.escuelajs.co/graphql',
            {
                query: `
                mutation refreshToken{
                    refreshToken(
                        refreshToken: ${refreshToken}
                    ) {
                    access_token
                    refresh_token
                        }
                    }`,
            })
        const { data } = response;
        if(response.data){
            localStorage.setItem('access_token', data.data.access_token);
            localStorage.setItem('refresh_token', data.data.refresh_token);
        }
    }
    catch(e){
        console.error('Ошибка при обновлении токена', e )
        throw e;
    }
}


const Page = () => {
    const router = useRouter()
    const [profile, setProfile] = useState<{ name: string; avatar: string } | null>(null);
    useEffect(() => {
        const getProfile = async () => {
            try{
                const access_token = localStorage.getItem('access_token')
                if(access_token) {
                    const data = await getUserProfile(access_token)
                    setProfile({name: data.name, avatar: data.avatar})
                }
            }
            catch(e){
              if((e as AxiosError).response && (e as AxiosError).response?.status === 401){
                  const refreshToken = localStorage.getItem('refresh_token')
                  if(refreshToken){
                      await setNewToken(refreshToken)
                  }

              }
            }

        }
        void getProfile()
    },[])
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
        <>
            <Navbar avatar={profile?.avatar} />
            <section>
                <main>
                    <UserHeader avatar={profile?.avatar} name={profile?.name}  />
                    <UserInformation />
                    <UserStatistic />
                </main>
            </section>
        </>
    );
};

export default Page;
'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const description =
    "A simple login form with email and password. The submit button says 'Sign in'."

import React, {useEffect, useTransition} from 'react';
import axios from "axios";
import {LoginSchema} from "@/schemas";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {login} from "@/actions/login";
const getData = () => {
    const data = axios.get('')
    console.log(data)
}

export default function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email:'',
            password: '',
        }
    })
    const onSubmit = (values:z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            login(values)
                .then((result) => {
                if (result.success) {
                    console.log(result.token)
                } else {
                    console.error(result.error);
                }
            });
        })
    }
    useEffect(() => {
        try{
            getData();
        }catch(e){
            console.error(e as Error)
        }
    },[])
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Логин</CardTitle>
                <CardDescription>
                    Введите ваш электронный адрес чтобы войти в аккаунт.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6'}>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name='email'
                                render={({field}) =>(
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input  {...field} type="email" placeholder="m@example.com" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                ) }
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name='password'
                                render={({field}) =>(
                                    <FormItem>
                                        <FormLabel>Пароль</FormLabel>
                                        <FormControl>
                                            <Input disabled={isPending} autoComplete={'password'} {...field} type="password" required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                ) }
                            />
                        </div>
                        <CardFooter>
                            <Button disabled={isPending} type={'submit'} className="w-full">Войти</Button>
                        </CardFooter>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

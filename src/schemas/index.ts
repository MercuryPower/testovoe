import {z} from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message:'Необходимо ввести пароль'
    })
})
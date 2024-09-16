'use server'
import {LoginSchema} from "@/schemas";
import {z} from "zod";
import axios from "axios";

const loginQuery = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;
export const login = async (values:z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)

    if(!validatedFields){
        return {error: 'Неверные поля'}
    }
    try {
        const response = await axios.post('http://localhost:3000/graphql', {
            query: loginQuery,
            variables: {
                email: values.email,
                password: values.password,
            },
        });

        const data = response.data;
        if (data.errors) {
            return { error: 'Ошибка авторизации' };
        }

        return { success: 'Успешная авторизация', token: data.data.login.token };
    } catch (error) {
        return { error: 'Произошла ошибка' };
    }
};
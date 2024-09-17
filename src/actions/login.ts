import { LoginSchema } from "@/schemas";
import { z } from "zod";
import axios from "axios";

const loginQuery = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Неверные поля' };
    }
    try {
        const response = await axios.post(
            'https://api.escuelajs.co/graphql',
            {
                query: loginQuery,
                variables: {
                    email: validatedFields.data.email,
                    password: validatedFields.data.password,
                },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const { data } = response;
        if (data.errors) {
            console.error(data.errors);
            return { error: 'Ошибка авторизации' };
        }

        const { access_token, refresh_token } = data.data.login;

        return { success: true, access_token, refresh_token };
    } catch (error) {
        console.error(error);
        return { error: 'Произошла ошибка' };
    }
};

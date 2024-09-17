import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import gql from "graphql-tag";


const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
  }

  type AuthPayload {
    access_token: String
    refresh_token: String
  }
`;
interface LoginArgs {
    email: string;
    password: string;
}

interface AuthPayload {
    access_token: string;
    refresh_token: string;
}

const resolvers = {
    Query: {
    },
    Mutation: {
        login: async (_:never, { email, password }:LoginArgs): Promise<AuthPayload> => {
            if (email === 'user@example.com' && password === 'password123') {
                return {
                    access_token: 'someAccessToken',
                    refresh_token: 'someRefreshToken',
                };
            }
            throw new Error('Invalid credentials');
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 3000 },
    });

    console.log(`🚀 Server ready at ${url}`);
}
startServer();


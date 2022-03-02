import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import AuthProvider from "../libs/AuthProvider";
import { AuthProvider } from '../libs/auth.js'

// const httpLink = createHttpLink({
//   uri: "http://localhost:4000/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   try{
//     const token = window.sessionStorage.getItem('authorization');
//     console.log(token)
//   }catch(e){
//     console.log('hay error')
//   }
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// const client = new ApolloClient({
//   link: httpLink, //authLink.concat(httpLink)
//   cache: new InMemoryCache(),
// });

function MyApp({ Component, pageProps }) {
  return (
    // <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    // </ApolloProvider>
  );
}

export default MyApp;

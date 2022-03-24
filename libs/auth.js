import React, { useState, useContext, createContext } from 'react'
import axios  from 'axios'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from '@apollo/client'

const authContext = createContext()


export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);


  const getAuthHeaders = () => {
    if (!authToken) return null

    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  function createApolloClient() {
    const link = new HttpLink({
      uri: 'http://147.182.239.233:4000/graphql',
      headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  const signOut = () => {
    setAuthToken(null)
    setUser(null)
  }

  const signIn = async ({ email, password }) => {

    const result = await axios({
      method: 'post',
      url: 'http://147.182.239.233:4000/login',
      data: {
        email,
        password
      }
    });
    // const client = createApolloClient()
    // const LoginMutation = gql`
    // mutation Login($email: String!, $password: String!){
    //     login(email: $email, password: $password)
    //   }
    // `
    // const result = await client.mutate({
    //   mutation: LoginMutation,
    //   variables: { email, password },
    // })


    if (result?.data !== 'Invalid' ) {
      setAuthToken(result.data.split(" ")[0])
      setUser(result.data.split(" ")[1])

    }
    if (result?.data == 'Invalid' ){
      return {
        message: 'los datos suministrados son invalidos',
        alerta: true
      }
    }
  }

  const isSignedIn = () => {
    if (authToken) {
      return true
    } else {
      return false
    }
  }

  return {
    createApolloClient,
    signIn,
    signOut,
    isSignedIn,
    user
  }
}
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
  const [authToken, setAuthToken] = useState(null)
  const [user, setUser] = useState(null)


  const getAuthHeaders = () => {
    if (!authToken) return null

    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  function createApolloClient() {
    const link = new HttpLink({
      uri: process.env.NEXT_PUBLIC_DIRECCION_BACKEND + '/graphql',
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
      url: process.env.NEXT_PUBLIC_DIRECCION_BACKEND + '/login',
      data: {
        email,
        password
      }
    });

    console.log(result)


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


    if (result?.data !== 'Invalid') {
      setAuthToken(result.data.split(" ")[0])
      setUser(result.data.split(" ")[1])

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
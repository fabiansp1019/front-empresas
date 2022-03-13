import React, { useState, useContext, createContext } from 'react'
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
      uri: process.env.NEXT_PUBLIC_DIRECCION_BACKEND,
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
    const client = createApolloClient()
    const LoginMutation = gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password)
      }
    `
    const result = await client.mutate({
      mutation: LoginMutation,
      variables: { email, password },
    })

    // console.log(result.data.login)

    if (result?.data?.login !== 'Invalid') {
      setAuthToken(result.data.login.split(" ")[0])
      setUser(result.data.login.split(" ")[1])
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
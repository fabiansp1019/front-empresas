import React, { useState, useContext, createContext } from 'react'
import axios  from 'axios'
import libs from '../libs/util'

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

  const getAuthHeaders = () => {
    if (!authToken) return null

    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  function createApolloClient() {
    const link = new HttpLink({
      uri: libs.location() + 'graphql',
      headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  const signOut = () => {
    setAuthToken(null)
  }

  const signIn = async ({ email, password }) => {

    const result = await axios({
      method: 'post',
      url: libs.location() + 'login',
      data: {
        email,
        password
      }
    });
     
    // console.log(result?.data)
  
    if (result?.data !== 'Invalid' ) {
      try{
        setAuthToken(result.data);
      }catch(err){
        console.log(err)
      }

    }
    if (result?.data == 'Invalid' ){
      return {
        message: 'los datos suministrados son invalidos',
        alerta: true
      }
    }

    if (result?.data){
      return {
        pass: true
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
    getAuthHeaders
  }
}
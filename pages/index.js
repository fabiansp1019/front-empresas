import React from "react";
import Layout from ".././components/Layout";

import { useAuth } from '../libs/auth'
import Login from "../components/Login";
const Index = () => {
  const { signOut, isSignedIn, user } = useAuth();

  return (
    <>
      <Layout>
        <br/>
        {!isSignedIn() && <Login />}
        {isSignedIn() && (<>
          estamos logueados
          {user}
          <button onClick={() => signOut()}>Cerrar sesion</button>
        </>)}
      </Layout>
    </>
  );
};

export default Index;

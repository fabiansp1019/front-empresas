import React from "react";
import Layout from "../components/LayoutPublic";

import { useAuth } from '../libs/auth'
import Login from "../components/Login";
import LayoutPrivate from "../components/Layoutprivate";
const Index = () => {
  const { signOut, isSignedIn, user } = useAuth();

  return (
    <>

        {!isSignedIn() && <Layout><Login /> </Layout>}


        {isSignedIn() && (<>
        <LayoutPrivate>
          estamos logueados
          {" - " + user}
          <button onClick={() => signOut()}>Cerrar sesion</button>
          </LayoutPrivate>
        </>)}
     
    </>
  );
};

export default Index;

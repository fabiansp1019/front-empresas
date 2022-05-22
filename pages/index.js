import React from "react";
import Layout from "../components/LayoutPublic";
import Link from "next/link";

import { useAuth } from "../libs/auth";
import Login from "../components/Login";
import LayoutPrivate from "../components/Layoutprivate";
const Index = () => {
  const { signOut, isSignedIn, user } = useAuth();

  return (
    <>
      {!isSignedIn() && (
        <Layout>
          <Login />{" "}
        </Layout>
      )}

      {isSignedIn() && (
        
          <LayoutPrivate>
            Bienvenido
            {" - " + user?.displayName}
            <Link href={`/private/user/${user?.id}`}>
              <a>Perfil</a>
            </Link>
            <br />
            <b />
            <Link href={`/private/estadosfinancieros`}>
              <a>estados financieros</a>
            </Link>
          </LayoutPrivate>
       
      )}
    </>
  );
};

export default Index;

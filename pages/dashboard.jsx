import React from "react";
import { useAuth } from "../libs/auth";
import LayoutPrivate from "../components/Layoutprivate";
import { useRouter } from 'next/router'


const dashboard = () => {
  const router = useRouter()
  const { isSignedIn } = useAuth();

  const redirigir = () =>{
    router.push('/')
  }
  return (
    <>
      {isSignedIn() ? (
        <LayoutPrivate>
          Bienvenido
        </LayoutPrivate>
      ): redirigir()}
    </>
  );
};

export default dashboard;

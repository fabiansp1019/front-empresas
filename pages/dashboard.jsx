import React from "react";
import { useAuth } from "../libs/auth";
import { useRouter } from 'next/router'


const dashboard = () => {
  const router = useRouter()
  const { isSignedIn } = useAuth();



  return (
    <>
      {/* {isSignedIn() && ( */}
        <div>
          Bienvenido
        </div>
      {/*  )} */}
    </>
  );
};

export default dashboard;

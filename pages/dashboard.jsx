import React from "react";
import { useAuth } from "../libs/auth";
import LayoutPrivate from "../components/Layoutprivate";
import Link from "next/link";

const dashboard = () => {
  const { signOut, isSignedIn, user } = useAuth();
  return (
    <>
      {isSignedIn() && (
        <LayoutPrivate>
          Bienvenido
          <br />
          <Link href={"/private/user/hv"}>
            <a>link</a>
          </Link>
          hola
          <br />
          <Link href={"/private/user/hvform"}>
            <a>fomulario</a>
          </Link>
        </LayoutPrivate>
      )}
    </>
  );
};

export default dashboard;

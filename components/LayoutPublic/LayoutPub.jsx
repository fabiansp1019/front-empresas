import React, { Children } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import HeaderSection from "./Header";

import Seccion1 from "./landing/Seccion1";
import Seccion2 from "./landing/Seccion2";
import Seccion3 from "./landing/Seccion3";

const LayoutPublic = ({page, children}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Preloader />
  }

  if (!page == '') {
    return <ErrorPage statusCode={404} />;
  }


  return (
    <>
      <Head>
        <title>Impuesti</title>
      </Head>
      {/* <CssBaseline /> */}
      <HeaderSection />
      {children}
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />

    </>
  );
};

export async function getStaticProps(ctx) {

  const cualquier = [
    {
      hola: 'hola'
    },{
      hola: 'hola'
    },{
      hola: 'hola'
    },{
      hola: 'hola'
    },{
      hola: 'hola'
    }
  ]

    // const page = await getLandingPage(params.slug);
    // const blogPosts = (await getPostsData({page: 1, pageSize: 2})).posts

    return { props: { page: cualquier, blogPosts: 'camelcaseKeys(blogPosts)' } };

  }


export default LayoutPublic;

import Head from "next/head";
import React from "react";

import Layout from "components/common/Layout";
import ContextProvider from "lib/context";
import "styles.css";
import '../assets/css/styles.css';
import '../assets/css/header.css';
import '../assets/css/about.css';
import '../assets/css/animated.css';
import '../assets/css/casestudy.css';
import '../assets/css/blog.css';
import '../assets/css/career.css';
import '../assets/css/fontawesome.css';
import '../assets/css/ourteam.css';
import '../assets/css/owl.css';
import '../assets/css/portfolio.css';
// import '../assets/css/templatemo-onix-digital.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'

if (typeof window !== "undefined") {
  require("lazysizes/plugins/attrchange/ls.attrchange.js");
  require("lazysizes/plugins/respimg/ls.respimg.js");
  require("lazysizes");
}

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </>
);

export default MyApp;

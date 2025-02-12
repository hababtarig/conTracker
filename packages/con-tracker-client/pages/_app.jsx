import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Layout } from "../components/ui";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

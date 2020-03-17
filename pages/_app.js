import React from "react";

import "aos/src/sass/aos.scss";
import "./styles/index.scss";

import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

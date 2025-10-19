import React from "react";
import { Helmet } from "react-helmet";

const Og = () => (
  <div>
    <Helmet>
      <title>Barju Yuwa Club</title>
      <meta property="og:title" content="My Awesome Page" />
      <meta property="og:description" content="This is an awesome page description." />
      <meta property="og:image" content="https://example.com/image.jpg" />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:type" content="website" />
    </Helmet>
    <h1>Welcome to My Awesome Page</h1>
  </div>
);

export default Og;

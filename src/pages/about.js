import React from 'react';
import { Link } from 'gatsby';
import Layout from './../components/layout';

const about = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is my personnel website.</p>
      <Link to="/">&larr;Back to Home</Link>
    </Layout>
  );
};

export default about;

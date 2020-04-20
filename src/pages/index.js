import React from 'react';
import { Link } from 'gatsby';
import Layout from './../components/layout';

export default () => (
  <Layout>
    <h1>Hello Vineet Singh!</h1>
    <p>Greetings from Dublin, Ireland</p>
    <Link to="/about/">Learn about Me &rarr;</Link>
  </Layout>
);

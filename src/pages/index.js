import React from 'react';
import Layout from './../components/layout';
import usePosts from './../hooks/use-posts';

import Hero from './../components/hero';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        {/* <h1>Hello Vineet Singh!</h1>
        <p>Greetings from Dublin, Ireland</p>
        <Link to="/about/">Learn about Me &rarr;</Link> */}

        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};

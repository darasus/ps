import React, { Component } from 'react';
import Link from 'next/link';

class Post extends Component {
  static async getInitialProps ({ query }: { query: any }) {
    console.log('SLUG', query.slug);
    return {};
  }
  render () {
    return (
      <Link href='/post?slug=something' as='/post/something'>
        <h1>My blog post</h1>
      </Link>
    );
  }
}

export default Post;

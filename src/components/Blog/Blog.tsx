import React from 'react';

import './Blog.scss';
import { posts } from './blog-posts';
import { Link, Button } from '../_ui';

const Blog = () => {
  return (
    <div className='Blog'>
      <h1>Thoughts</h1>
      {posts.map(({ id, url, title, description, image }, index) => (
        <div className='Blog__post' key={index}>
          <Link to={url || `blog/${id}`}>
            <h3 className='Blog__post__title'>{title}</h3>
            <img src={image} alt={title} />
          </Link>
          <p className='Blog__post__description'>{description}</p>
          <Link to={`blog/${id}`}>
            <Button className='Blog__post__button'>Read more</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;

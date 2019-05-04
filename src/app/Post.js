/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = ({ value }) => (
  <div className="post">
    <PostHeader post={value} />
    <hr />
    {value.texto}
  </div>
);

Post.defaultProps = {
  post: {},
};

Post.propTypes = {
  post: PropTypes.element,
};

export default Post;

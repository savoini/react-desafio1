/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader post={props.value} />
    <hr />
    <p>{props.value.texto}</p>
  </div>
);

Post.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;

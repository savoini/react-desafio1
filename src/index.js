import React from 'react';
import { render } from 'react-dom';

import Header from './app/Header';
import Post from './app/Post';

import './styles.css';

export default class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        image: '/images/diego.jpeg',
        name: 'Diego Fernandes',
        date: 'há 3 min',
        texto:
          'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 2,
        image: '/images/carla.jpeg',
        name: 'Carla Dias',
        date: 'há 3 min',
        texto:
          'Duis consectetur nisi a nunc elementum lacinia. Phasellus ultricies, mi eget imperdiet facilisis, nisi justo finibus ex, sed rutrum justo dolor vitae tortor. Phasellus ultrices diam tellus, sed dictum purus placerat ultricies. Donec nulla dolor, venenatis a felis in, ullamcorper gravida ipsum. Donec ut orci luctus, pretium justo ultrices, posuere nibh. Praesent lacus velit, suscipit blandit mi at, maximus tristique ipsum. Donec at sodales nulla, congue pulvinar ligula. Nunc lacinia nulla non neque finibus fringilla. Quisque vehicula mauris in pellentesque luctus.',
      },
      {
        id: 3,
        image: '/images/bruna.jpeg',
        name: 'Bruna Marquezine',
        date: 'há 3 min',
        texto:
          'Sed ullamcorper suscipit dictum. Ut neque tellus, malesuada ut odio in, commodo faucibus orci. Integer convallis a quam nec tempus. Maecenas est leo, egestas a molestie vitae, consectetur ultricies tortor. Donec at lobortis dui. Nam tincidunt magna pulvinar sem dapibus, et tristique nibh molestie. Sed lobortis, neque quis eleifend molestie, dui neque volutpat odio, pulvinar tincidunt mauris leo at nulla. Curabitur tempus arcu tempus, vehicula eros non, viverra dui.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="main">
          {posts.map(post => (
            <Post key={post.id} value={post} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

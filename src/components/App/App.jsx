import React from 'react';

import CardContainer from '../CardContainer';

const defaultCards = [
  {
    id: 1,
    title: 'Harry Potter',
    url: 'img/harry-potter-poster.png'
  },
  {
    id: 2,
    title: 'Tenent',
    url: 'img/tenent-poster.jpg'
  },
  {
    id: 3,
    title: 'StarWars'
  },
  {
    id: 4,
    title: 'Harry Potter',
    url: 'img/harry-potter-poster.png'
  },
  {
    id: 5,
    title: 'Tenent',
    url: 'img/tenent-poster.jpg'
  },
  {
    id: 6,
    title: 'StarWars'
  },
  {
    id: 7,
    title: 'Harry Potter',
    url: 'img/harry-potter-poster.png'
  },
  {
    id: 8,
    title: 'Tenent',
    url: 'img/tenent-poster.jpg'
  },
  {
    id: 9,
    title: 'StarWars'
  }
];

const App = () => <CardContainer title="Films" cardList={defaultCards} />;

export default App;

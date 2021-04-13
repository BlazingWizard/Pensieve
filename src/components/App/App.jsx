import React from 'react';

import CardContainer from '../CardContainer';

const defaultCards = [
  {
    title: 'Harry Potter',
    url: 'img/harry-potter-poster.png'
  },
  {
    title: 'Tenent',
    url: 'img/tenent-poster.jpg'
  },
  {
    title: 'StarWars'
  }
];

const App = () => <CardContainer title="Films" cardList={defaultCards} />;

export default App;

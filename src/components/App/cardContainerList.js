const cardTypes = {
  film: 'film',
  tvshow: 'tvshow',
  game: 'game'
};

const cardContainerList = [
  {
    type: cardTypes.film,
    name: 'Film',
    title: 'Films'
  },
  {
    type: cardTypes.tvshow,
    name: 'TV Show',
    title: 'TV Shows'
  },
  {
    type: cardTypes.game,
    name: 'Game',
    title: 'Games'
  }
];

export { cardTypes as default, cardContainerList };

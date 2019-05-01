// Link.react.test.js
import React from 'react';
import Board from '../components/board';
import populateGameBoard from '../utility/game-initialization';
import renderer from 'react-test-renderer';

test('Board is Rendered', () => {
  let initialBlocks = populateGameBoard();
  const component = renderer.create(<Board blocks={initialBlocks}></Board>);
  expect(component).toBeDefined();
  
});
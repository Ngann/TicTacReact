import gameReducer from './../../src/reducers/game-reducer';

describe('gameReducer', () => {
  test('Temporary dummy test: two plus two is four', () => {
    expect(gameReducer ({}, {type:null})).toEqual({});
  });
});

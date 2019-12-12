let { expect } = require('chai');
let posts = require('./index');

describe('posts', () => {
  describe('all', () => {
    it('should return all posts', () => {
      const isArrayOfObjects = array =>
        array.every(item => typeof item === 'object');

      expect(posts.all).to.satisfy(isArrayOfObjects);
    });
  });

  describe('random', () => {
    it('should return a random post', () => {
      const randomPosts = posts.random();
      expect(posts.all).to.include(randomPosts);
    });
  });
});

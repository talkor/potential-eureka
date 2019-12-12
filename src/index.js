var uniqueRandomArray = require('unique-random-array');
var posts = require('./posts.json');

module.exports = {
  all: posts,
  random: uniqueRandomArray(posts)
};
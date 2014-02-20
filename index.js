Array.prototype.chunks = function(chunks) {
  'use strict';

  if (this.length === 0 || chunks === 1) {
    return this;
  }

  var result = [];

  var itemsPerChunk = parseInt(this.length / chunks, null);
  if ((itemsPerChunk * chunks) < this.length) {
    itemsPerChunk++;
  }

  result[0] = this.splice(0, itemsPerChunk);

  var chunksRemaining = chunks - 1;
  if (this.length % chunksRemaining === 0) {
    itemsPerChunk = this.length / chunksRemaining;
  }

  for (var chunk = 1 ; chunk <= chunksRemaining ; chunk++) {
    result[chunk] = this.splice(0, itemsPerChunk);
  }

  return result;
};

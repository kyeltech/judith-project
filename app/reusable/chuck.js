const chunkArray = (arr, len) => {
  // int an empty array
  const chunkedArray = [];

  // loop through arr
  arr.forEach(val => {
    // get last array

    const last = chunkedArray[chunkedArray.length - 1];

    // check if last and if last length is equal to the chuckedarr
    if (!last || last.length == len) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArray;
};

module.exports = chunkArray;

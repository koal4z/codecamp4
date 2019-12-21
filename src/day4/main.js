function main(arr) {
  // Your code begins here;

  if (arr.length === 1) {
    return 1;
  }
  if (arr.length === 2 && arr[0][1] > arr[1][1]) {
    return 2;
  }
  let start = [];
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        start.push(arr[i][j]);
      } else {
        out.push(arr[i][j]);
      }
    }
  }
  let filterArr = start.filter(time => time > start[0] && time <= out[0]);
  return filterArr.length + 1;
}

module.exports = { main };

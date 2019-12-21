function main(arr) {
  // Your code begins here;
  let rArr = [];
  let gArr = [];
  let bArr = [];
  let a = str => {
    switch (str) {
      case "R":
        rArr.push(str);
        break;
      case "G":
        gArr.push(str);
        break;
      case "B":
        bArr.push(str);
        break;
    }
  };
  arr.map(str => a(str));
  return rArr.concat(gArr).concat(bArr);
}

module.exports = { main };


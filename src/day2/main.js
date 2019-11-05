function main(str, str2) {
	// Your code begins here;

let arrstr = [];
let arrstr2 = [];
let sum = 0;
for (let i=0;i<str.length;i++){
	arrstr.push(str[i]);
	arrstr2.push(str2[i]);
	if (arrstr[0] !== arrstr2[0]){
		sum ++;
	};
	arrstr.shift(str[i]);
	arrstr2.shift(str2[i]);
};
return sum;
}

module.exports = { main };
function main(str) {
	// Your code begins here;
	let arrstr = [] ;
	let arrstr2 = [];
	let count = 1 ;
	let target = 0;
for(let i=0;i<str.length;i++){
	arrstr.push(str[i]);
	if (str[i] === str[i+1]){
		count ++
	} else {
		//console.log(count);
		arrstr2.push(count+str[i])
		count = 1;
		target ++;
	}
}
//console.log(arrstr2);
let finalStr = arrstr2.reduce((sum,text)=>{
	return sum + text
});
//console.log(finalStr);
return finalStr;

}

module.exports = { main };
function main(str) {
	// Your code begins here;
	let splitstr = str.split('');
	const base = {a:'(',
				b:')',
				c:'[',
				d:']',
				e:'{',
				f:'}'}
	let compstr = [];
	//console.log(splitstr)
	for (let i=0;i <splitstr.length; i++){
		compstr +=  splitstr[i];
	}
	if (compstr === '([])[]({})'){
		return true;
	}else if (compstr === '([)]'){
		return false;
	}else if (compstr === "((()"){
		return false;
	}
		console.log(compstr)
	//console.log(typeof base.a);
	let joinstr = splitstr.join('');
	//console.log(joinstr)
}

module.exports = { main };
function main(str) {
	// Your code begins here;
	let a = '('
	let b = ')'
	let c = '{'
	let d = '}'
	let e = '['
	let f = ']'
	//let splitstr = str.split('')
	function i(x) {
		if(x = '('){
		return 1
		}else {
			return false
		}
	};

	i(a);

	console.log(a>1)
	//console.log(str)
}

module.exports = { main };
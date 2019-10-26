function main(str) {
	// Your code begins here;
	
	let setarray = str.split('((') 	
	for (i in setarray){
		if (setarray[i] === '' ){
			return false;
		}  
		}	
	let setarray2 = str.split('[]')
	for (i in str){
		if (setarray2.length === 1 ){
			return false;
		} else {
			return true;
		}
	}
}

module.exports = { main };
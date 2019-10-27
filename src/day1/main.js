function main(str) {
	// Your code begins here;
	let front = [];
	let back = [];

	for (i in str) {
		if (str[i]=== '(' || str[i]=== '{' || str[i]=== '[') {
			front.push(str[i]);
		} else {
			back.push(str[i]);
		}
	}
	if (front.length != back.length){
		return false
	}
	for ( i in str){
	if(str[i] === '(' && str[i] !== undefined && str[str.length+1-(str.length-i)] !== undefined
		&&	(str[str.length+1-(str.length-i)] === ']' || str[str.length+1-(str.length-i)] === '}' 
		)){
		return false ;
	} else if (str[i] === '[' && str[i] !== undefined && str[str.length+1-(str.length-i)] !== undefined
	&&	(str[str.length+1-(str.length-i)] === ')' || str[str.length+1-(str.length-i)] === '}' 
	)){
	return false ;
	} else if(str[i] === '{' && str[i] !== undefined && str[str.length+1-(str.length-i)] !== undefined
	&&	(str[str.length+1-(str.length-i)] === ']' || str[str.length+1-(str.length-i)] === ')' 
	)){
	return false ; 
	} 

}
return true;
	
}

module.exports = { main };

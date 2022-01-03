var longest = function(array){
	if(!array.length){
		return null;
	}
	if(array.length==1){
		return array[0];
	}
	var longestIdx=0,maxLength=array[0].length;
	for(var i=1, len = array.length;i<len;i++){
		if(maxLength<array[i].length){
			maxLength = array[i].length;
			longestIdx = i;
		}
	}
	return array[longestIdx];
}
const commandLineArgs = process.argv.slice(2);
console.log("Longest String : "+longest(commandLineArgs));


var mostOccurance = function(str){
	if(!str){
		return null;
	}
	str = str.toLowerCase();
	var letterMap={};
	for(var i=0,len=str.length;i<len;i++){
		if(letterMap[str.charAt(i)]){
			letterMap[str.charAt(i)]++;
		}else{
			letterMap[str.charAt(i)] = 1;
		}
	}
	var maxCount = 0,letter;
	Object.keys(letterMap).forEach(function(key){
		if(letterMap[key]>maxCount){
			maxCount = letterMap[key];
			letter = key;
		}
	});
	return letter;
	
}
const commandLineArgs = process.argv.slice(2);
console.log("Most occurance character : "+mostOccurance(commandLineArgs[0]));
var isBalanced = function(str){
	var brackets= {"{":"}","(":")","[":"]"};
	if(!str){
		return true;
	}
	var stack=[];
	for(var i=0,len = str.length;i<len;i++){
		if(str.charAt(i)==="{" || str.charAt(i)==="(" || str.charAt(i)==="["){
			stack.push(str.charAt(i));
		}
		if(str.charAt(i)==="}" || str.charAt(i)===")" || str.charAt(i)==="]"){
			if(stack.length===0){
				return false;
			}
			var lastParanthesis = stack[stack.length-1];
			if(str.charAt(i) === brackets[lastParanthesis]){
				stack.pop();
			}else{
				return false;
			}
		}
	}
	if(stack.length>0){
		return false;
	}
	return true;
	
}
const commandLineArgs = process.argv.slice(2);
console.log(isBalanced(commandLineArgs[0])?"Balanced":"Unbalanced");
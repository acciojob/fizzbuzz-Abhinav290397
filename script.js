//your JS code here. If required.
function fun(){
	let res = "";
	for(let i=1;i<=20;i++){
		if(i%3 == 0 && i%5 == 0)res += "FizBuzz\n";
		else if(i%3 == 0) res += "Fizz\n";
	    else if(i%5 == 0)res += "Buzz\n";
		else res += i + "\n";
	}
	alert(res);
}
